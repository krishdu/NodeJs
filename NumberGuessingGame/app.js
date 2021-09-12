const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const color = require('colors');

const generatedNumber = 51;

startGuessing();

async function startGuessing(){
    try{
      let userInput = await getNumberWithPromise();
      if(userInput == generatedNumber){
          console.log(`${userInput} - is a correct guess ⚜`.rainbow.bold);
          readline.close();  
          return;
      }else if(userInput > generatedNumber){
          console.log(`${userInput} - is Too High ⏫`.brightRed.bold);
      }else{
          console.log(`${userInput} - is Too Low ⏬`.brightCyan.bold);
      } 
    }catch(err){
       console.log(`${err}`.underline.red); 
    } 
  startGuessing();
} 

function getNumberWithPromise(){
  return new Promise((resolve, reject) =>{
    readline.question('Guess a number -  '.brightBlue.bold, (answer) => {
        if(!isNaN(answer)){
          //console.log('Resolve');
          resolve(Number(answer));
        }else{
          //console.log('Reject');
          reject('Not a Number, !Please enter a number!');
        }
    });
  }); 
}