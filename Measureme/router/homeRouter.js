const express = require('express');
const router = express.Router();
const localStorage = require('../storage/local-storage');

let userName = getUserName();  
let taskDetails = getTaskDetails();

let masterDetailsIndex = {
     uname : userName,
     taskData : taskDetails,
     error : ''
};

router.get('/', (req, res) => { 
    userName = getUserName();
    taskDetails = getTaskDetails();

    masterDetailsIndex = {
        uname : userName,
        taskData : taskDetails,
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
            let getPreviousTask = getTaskDetails();

            const newTask = {
                tName : taskName,
                tTime : taskTime
            };
            //previousTsk.push(newTask);
            if(getPreviousTask){
                getPreviousTask.push(newTask);
                previousTsk = getPreviousTask;
            } else{
                previousTsk.push(newTask);    
            }

           setTaskDetails(previousTsk);

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

/*-Delete all the tasks-*/
router.get('/deleteallposts', (req, res) => {
    try{
         deleteAllTheTasks();
        return res.redirect('/');
    }catch(err){
        masterDetailsIndex.error = err;
    }

    res.render('index', { 
        details : masterDetailsIndex
    });
});


function getTaskDetails(){
    let oldTask = '';
    try{
        oldTask = localStorage.getItem('tasks');
    }
    catch(e){
        console.error(e);
    }

    return oldTask ? JSON.parse(oldTask) : '';
}

function setTaskDetails(tasks){
     localStorage.setItem('tasks', JSON.stringify(tasks));
}

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

function deleteAllTheTasks(){
    try{
        localStorage.removeItem('tasks');
    }catch(e){
        throw 'Storage error, not able to delete tasks';
    }
}


module.exports = router;
