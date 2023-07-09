const arr = ['rock','paper','scissor'];

function game() {

    //makes the game run 5 times
    for(i=0;i<5;i++){

        //get the computer choice
        function getComputer() {
            const choice = arr[(Math.floor(Math.random() * arr.length))];
            return choice;
        }

        const comp = getComputer();
        const user = prompt().toLowerCase();
        let counter = 0;
        //game function
        function play(user,comp) {
            
            if ((user === 'rock') && (comp === 'scissor')) {
                console.log('win');
                counter++;
            } else if ((user ==='paper') && (comp === 'rock')) {
                console.log('win');
                counter++;
            } else if ((user ==='scissor') && (comp === 'paper')) {
                console.log('win');
                counter++;
            } else if ((comp === 'rock') && (user === 'scissor')) {
                console.log('lose');
                counter--;
            } else if ((comp ==='paper') && (user === 'rock')) {
                console.log('lose');
                counter--;
            } else if ((comp ==='scissor') && (user === 'paper')) {
                console.log('lose');
                counter--;
            } else if (user === comp) {
                console.log('tie');
            } else {
                console.log('nope');
            }
            console.log(counter);
        }
        play(user,comp);
    }  
}
console.log(game());