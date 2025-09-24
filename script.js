function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log("Computer's choice:",choices[randomIndex]);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Choose an option:\nRock = 0\nPaper = 1\nScissors = 2.\n");
  if (choice === "0") {
    console.log("Your choice: rock\n");
    return "rock";
  }
  if (choice === "1") {
    console.log("Your choice: paper\n");
    return "paper";
  }
  if (choice === "2") {
    console.log("Your choice: scissors\n");
    return "scissors";
  }
  console.log("Invalid input");
  return null;
}

function playRound(human, computer) {
  let result = "";
  if (human === computer){
    result = "It's a tie";
  } else if ((human === "rock" && computer === "scissors") ||(human === "scissors" && computer === "paper")
              || (human === "paper" && computer === "rock")) {
    result = "You win";
  } else {
    result = "You lose";
  }
  console.log(result);
  return result;
}

function playGame() {
  
}

let humaScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);