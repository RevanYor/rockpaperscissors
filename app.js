const arr = ['rock','paper','scissor'];
const user = prompt().toLowerCase();

function getComputer() {
    const choice = arr[(Math.floor(Math.random() * arr.length))];
    return choice;
}

const comp = getComputer();

function play(user,comp) {
    if ((user === 'rock') && (comp === 'scissor')) {
        console.log('win');
    } else if ((user ==='paper') && (comp === 'rock')) {
        console.log('win');
    } else if ((user ==='scissor') && (comp === 'paper')) {
        console.log('win');
    } else if ((comp === 'rock') && (user === 'scissor')) {
        console.log('lose');
    } else if ((comp ==='paper') && (user === 'rock')) {
        console.log('lose');
    } else if ((comp ==='scissor') && (user === 'paper')) {
        console.log('lose');
    } else if (user === comp) {
        console.log('tie');
    } else {
        console.log('nope');
    }
}

console.log(play(user,comp));
//play();