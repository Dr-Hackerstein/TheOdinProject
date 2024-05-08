function getComputerChoice() {
  let number = Math.ceil(Math.random() * 3);

  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Rock Paper Scissors");
  const choiceInLower = choice.toLocaleLowerCase();
  return choiceInLower;
}

function checkWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    return "Player Won!";
  } else {
    return "Computer Won!";
  }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(checkWinner(humanChoice, computerChoice));
