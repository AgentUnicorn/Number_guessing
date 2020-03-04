

let chanceArea = document.getElementById('chanceArea'); // generate a random number
let randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber);
let userTimeLeft = document.getElementById('userTimeLeft');
let userHistory = document.getElementById('userHistory');
let userGuess = document.getElementById('userInputGuess');
let userButton = document.getElementById('buttonGuess');
let userResult = document.getElementById('resultArea');
let userReset = document.getElementById('reset');
let chance = 3;
let history = [];
let time = 15 // time start from 0
let myTime; // timer will be assign to this variable
document.getElementById('userInputGuess').disabled=true;
document.getElementById('buttonGuess').disabled=true;
document.getElementById('reset').disabled=true;
document.getElementById('userTimeCount').innerHTML = ("Time left: " + time);
chanceArea.innerHTML = `Chance : ${chance}`;

function start() 
{
    document.getElementById('userInputGuess').disabled=false;
    document.getElementById('buttonGuess').disabled=false;
    document.getElementById('reset').disabled=false;
}

function Reset()
{
    let randomNumber = Math.ceil(Math.random()*100);
    console.log(randomNumber);
    let chance = 3;
    let message = "";
    time = 15;
    timeOut();
    let history = [];
    userHistory.innerHTML = `${history}`;
    chanceArea.innerHTML=`Chance: ${chance}`;
    userResult.innerHTML = `${message}`;
    document.getElementById('userTimeCount').innerHTML = ("Time left: " + time);
    document.getElementById('userInputGuess').disabled=true;
    document.getElementById('buttonGuess').disabled=true;
    document.getElementById('reset').disabled=true;
}

function timecounting() // countdown function
{
    myTime = setInterval(() => {
    time -= 1
    document.getElementById('userTimeCount').innerHTML = ("Time left: " + time)
        if ( time == 0) 
        {
            timeOut();
            document.getElementById('userInputGuess').disabled=true;
            document.getElementById('buttonGuess').disabled=true;
            document.getElementById('userTimeCount').innerHTML="You lose!";
        }
    }, 1000)
}

function timeOut()  // stop the clock function
{
    clearInterval(myTime);
}

//3.a read the value from input
function guess() 
{
    let userNumber = userGuess.value;
    history.push(userNumber);
    // if (history.includes(userNumber) == true) 
    // {
    //     alert('nhap lai di con di');
    // }
    chance = chance -1;
    let message ="";
    userGuess.value="";

//3.b compare to random number
    if (chance > 0)
    {
        if (userNumber*1 === randomNumber) 
        {
            message = "Congratulation!! You're smart!!";
        }
        else if (userNumber*1 > randomNumber)
        {
            message = "Too big! Try again.";
        }
        else if (userNumber*1 < randomNumber)
        {
            message = "Too small! Try again.";
        }
        userResult.innerHTML = `${message}`;
        chanceArea.innerHTML = `Chance : ${chance}`;
        userHistory.innerHTML = `History: ${history}`;
        }
    else 
    {
        timeOut();
        message = "Too bad!! You're lose!!"
        userResult.innerHTML = `${message}`;
        chanceArea.innerHTML = "Chance : 0";
        userHistory.innerHTML = `History: ${history}`;
}
}

