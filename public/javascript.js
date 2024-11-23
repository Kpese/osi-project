let number1 = 0;
let number2 = 0;
const min = 1;
const max = 100;
let randomNum;


 function randomNumberGenerator(){
    return  Math.floor (Math.random() * max) + min;
     
}
function handleGeneratedNumbers(){    
number1 = randomNumberGenerator();
document.getElementById('generatedNumber').innerHTML= ` ${number1}`;
setTimeout(compareNumbers,10)

}



function handleGeneratedNumbers2(){
    number2 =randomNumberGenerator();
        document.getElementById('generatedNumber2').innerHTML= `${number2}`;
    setTimeout(compareNumbers,10)
}
function compareNumbers(){
    if (number1 && number2){
    let highestNumber = 0;
     let winnermessage = "";
     
     if(number1 > number2){

        highestNumber = number1;
       winnermessage ="Player 1 won 😎"
     }
     
    
    else if(number2 > number1){
     highestNumber = number2;
     winnermessage = "Player 2 won 🤑"
    }
       
     else {
       highestNumber = number1;
       winnermessage = "It's a tie 😜" 
     }
     document.getElementById('highestNumber').innerHTML= `${highestNumber}`;
    
    setTimeout(function(){
     alert(winnermessage)
    },3000)
    number1 = 0;
    number2 = 0;
}

}




function resetGame(){
   document.getElementById('generatedNumber').innerHTML = "";
   document.getElementById('generatedNumber2').innerHTML = "";
   document.getElementById ('highestNumber').innerHTML = "";
}

number1 = 0;
number2 = 0;


document.getElementById('resetBtn').addEventListener("click",resetGame)

document.getElementById('myButton').addEventListener("click",handleGeneratedNumbers)

document.getElementById('myButton2').addEventListener("click",handleGeneratedNumbers2)
