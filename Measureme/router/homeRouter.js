const express = require('express');
const router = express.Router();
const localStorage = require('../storage/local-storage');


router.get('/', (req, res) => { 
    let userName = getUserName();
    res.render('index', {
        uname : userName
    });
});


/* save user name as per request*/
router.post('/saveuname', (req, res) => { 
    let { uname } = req.body;
    try{
        localStorage.setItem('userName', uname) ;
        console.log(`User name save as ${uname}`);
    }catch(err){
        console.error(err);
    }   
    res.end();
});


function getUserName(){
    let userName = localStorage.getItem('userName');
    if(userName){
        return userName;
    }else{
       let defaultName = 'Guest'
       localStorage.setItem('userName', defaultName) ;
       return defaultName;
    }
}


module.exports = router;
