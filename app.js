const arr = ["rock", "paper", "scissor"];
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let para = document.querySelector("#paragraph");
let userChoice = 0;

let choice = 0;
let puterCounter = 0;
let playerCounter = 0;
let counter = 0;

//get the user choice
rock.addEventListener("click", () => {
  userChoice = "rock";
});
paper.addEventListener("click", () => {
  userChoice = "paper";
});
scissor.addEventListener("click", () => {
  userChoice = "scissor";
});

//game function
function play(userChoice, choice) {
  choice = arr[Math.floor(Math.random() * arr.length)];

  if (userChoice === "rock" && choice === "scissor") {
    console.log("win");
    counter++;
    playerCounter++;
  } else if (userChoice === "paper" && choice === "rock") {
    console.log("win");
    counter++;
    playerCounter++;
  } else if (userChoice === "scissor" && choice === "paper") {
    console.log("win");
    counter++;
    playerCounter++;
  } else if (choice === "rock" && userChoice === "scissor") {
    console.log("lose");
    counter--;
    puterCounter++;
  } else if (choice === "paper" && userChoice === "rock") {
    console.log("lose");
    counter--;
    puterCounter++;
  } else if (choice === "scissor" && userChoice === "paper") {
    console.log("lose");
    counter--;
    puterCounter++;
  } else if (userChoice === choice) {
    console.log("tie");
  } else {
    console.log("nope");
  }
  para.textContent = `Your score is ${playerCounter} and the computer's score is ${puterCounter}!`;

  //Sets the score and restarts the game after 5 points
  if (playerCounter >= 5) {
    let winner = document.createElement("div");
    winner.textContent = "You win";
    document.body.appendChild(winner);
    playerCounter = 0;
    puterCounter = 0;
  } else if (puterCounter >= 5) {
    let loser = document.createElement("div");
    loser.textContent = "You lose";
    document.body.appendChild(loser);
    playerCounter = 0;
    puterCounter = 0;
  }
}

rock.addEventListener("click", () => {
  play(userChoice, choice);
});
paper.addEventListener("click", () => {
  play(userChoice, choice);
});
scissor.addEventListener("click", () => {
  play(userChoice, choice);
});
