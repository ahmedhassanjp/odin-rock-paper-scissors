function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  var choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function playGround() {
  const capLetter = playerSelection.charAt(0).toUpperCase();
  const remainLetters = playerSelection.slice(1).toLowerCase();
  const result = capLetter + remainLetters;
  const cpu = getComputerChoice();

  if (result === cpu) {
    console.log("Tie game!");
  } else if (result === "Rock" && cpu === "Paper"
  || result === "Paper" && cpu === "Scissors"
  || result === "Scissors" && cpu === "Rock") {
    console.log(`You Lose! ${cpu} beats ${result}.`);
  } else if (result === "Paper" && cpu === "Rock"
  || result === "Scissors" && cpu === "Paper"
  || result === "Rock" && cpu === "Scissors") {
    console.log(`You Win! ${result} beats ${cpu}.`);
  }
}

var playerSelection = prompt("Rock, paper or scissors?");

function game() {
  for (let i = 0; i < 5; i++) {
    playGround();
  }
}

game();