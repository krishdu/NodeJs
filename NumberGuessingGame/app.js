const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const color = require('colors');
const random = require('random');

//const generatedNumber = 51;
const generatedNumber = random.int((min = 1), (max = 100));
//console.log(generatedNumber);
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
    readline.question('Guess a number between (1 - 100): '.brightBlue.bold, (answer) => {
        if(!isNaN(answer)){
          resolve(Number(answer));
        }else{
          reject('Not a Number, !Please enter a number!');
        }
    });
  }); 
}