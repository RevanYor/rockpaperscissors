const arr = ['rock','paper','scissor'];
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let userChoice = 0;

let choice = arr[(Math.floor(Math.random() * arr.length))];
let puterCounter = 0;
let playerCounter = 0;
let counter = 0;

//get the user choice
rock.addEventListener("click", () => {userChoice = 'rock'; });
paper.addEventListener("click", () => {userChoice = 'paper';});
scissor.addEventListener("click", () => {userChoice = 'scissor';});


//game function
function play(userChoice,choice) {   
    if ((userChoice === 'rock') && (choice === 'scissor')) {
        console.log('win');
        counter++;
        playerCounter++;
    } else if ((userChoice ==='paper') && (choice === 'rock')) {
        console.log('win');
        counter++;
        playerCounter++;
    } else if ((userChoice ==='scissor') && (choice === 'paper')) {
        console.log('win');
        counter++;
        playerCounter++;
    } else if ((choice === 'rock') && (userChoice === 'scissor')) {
        console.log('lose');
        counter--;
        puterCounter++;
    } else if ((choice ==='paper') && (userChoice === 'rock')) {
        console.log('lose');
        counter--;
        puterCounter++;
    } else if ((choice ==='scissor') && (userChoice === 'paper')) {
        console.log('lose');
        counter--;
        puterCounter++;
    } else if (userChoice === choice) {
        console.log('tie');
    } else {
        console.log('nope');
    }
    console.log(playerCounter);
}

rock.addEventListener("click", () => {play(userChoice, choice);});
paper.addEventListener("click", () => {play(userChoice, choice);});
scissor.addEventListener("click", () => {play(userChoice, choice);});