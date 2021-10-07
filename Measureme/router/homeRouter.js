const express = require('express');
const router = express.Router();
const localStorage = require('../storage/local-storage');

let userName = getUserName();        
let masterDetailsIndex = {
     uname : userName,
     error : ''
};

router.get('/', (req, res) => { 
    userName = getUserName();
    masterDetailsIndex = {
        uname : userName,
        error : ''
    }; 
    res.render('index',{ 
       details : masterDetailsIndex
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

/*--------- save task -----------*/
router.post('/saveTask', (req, res) => {
    let {taskName, taskTime} = req.body;
    try{
        if(taskName && Number(taskTime) > 0 && Number(taskTime) < 24){
            
            let previousTsk = [];
            let getPreviousTask = localStorage.getItem('tasks');

            const newTask = {
                tName : taskName,
                tTime : taskTime
            };
            previousTsk.push(newTask);
            getPreviousTask ? previousTsk.push(JSON.parse(getPreviousTask)) : '';

            localStorage.setItem('tasks', JSON.stringify(previousTsk));
            return res.redirect('/');
        }
    }catch(err ) {
        console.error(err);  
    }

    masterDetailsIndex.error = "Something went wrong!!";
    res.render('index', { 
        details : masterDetailsIndex
    });
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
