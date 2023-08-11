// Declare computerChoice function that generates a random choice
function getComputerChoice() {
  // Create an array of choices
  const choices = ["Rock", "Paper", "Scissors"];
  // Create a logic for choosing the random choice from the array
  var choice = Math.floor(Math.random() * 3);          /* Since [choices.length = 3] */
  // Return a random choice
  return choices[choice];
}

// Declare playGround function that holds the game logic
let playerScore = 0;
let cpuScore = 0;

function playGround(type) {

  const result = type;

  const roundMessage = document.getElementById('round-result');
  const cpuMessage = document.getElementById('cpu');

  // Game Logic
  const cpu = getComputerChoice();
  cpuMessage.textContent = `The Computer chose ${cpu}!`
  roundMessage.textContent = ""
  if (result === cpu) {
    roundMessage.textContent = "Tie game!"
  } else if (result === "Rock" && cpu === "Paper"
  || result === "Paper" && cpu === "Scissors"
  || result === "Scissors" && cpu === "Rock") {
    roundMessage.textContent = `You Lose! ${cpu} beats ${result}.`;
    cpuScore += 1;
    playerScore += 0;
  } else if (result === "Paper" && cpu === "Rock"
  || result === "Scissors" && cpu === "Paper"
  || result === "Rock" && cpu === "Scissors") {
    roundMessage.textContent = `You Win! ${result} beats ${cpu}.`;
    cpuScore += 0;
    playerScore += 1;
  }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
cpuFinal = document.getElementById('cpu-score')
playerFinal = document.getElementById('player-score')
finalScore = document.getElementById('final-score')

playerFinal.textContent = `Player score: ${playerScore}`;
cpuFinal.textContent = `Cpu score: ${cpuScore}`;

rock.addEventListener('click', () => {
  playGround("Rock");
  playerFinal.textContent = `Your score: ${playerScore}`;
  cpuFinal.textContent = `Cpu score: ${cpuScore}`;

  if (cpuScore == 5) {
    finalScore.textContent = "CPU wins this game! \n Choose another shape if you want to play another game.";
    reset();
  } else if (playerScore == 5) {
    finalScore.textContent = "You win this game! \n Choose another shape if you want to play another game.";
    reset();
  }
  else if (cpuScore != 5 && playerScore != 5){
    finalScore.textContent = "";
  }
});

paper.addEventListener('click', () => {
  playGround("Paper");
  playerFinal.textContent = `Your score: ${playerScore}`;
  cpuFinal.textContent = `Cpu score: ${cpuScore}`;

  if (cpuScore == 5) {
    finalScore.textContent = "CPU wins this game! \n Choose another shape if you want to play another game.";
    reset();
  } else if (playerScore == 5) {
    finalScore.textContent = "You win this game! \n Choose another shape if you want to play another game.";
    reset();
  }
  else if (cpuScore != 5 && playerScore != 5){
    finalScore.textContent = "";
  }
});

scissors.addEventListener('click', () => {
  playGround("Scissors");
  playerFinal.textContent = `Your score: ${playerScore}`;
  cpuFinal.textContent = `Cpu score: ${cpuScore}`;

  if (cpuScore == 5) {
    finalScore.textContent = "CPU wins this game! \n Choose another shape if you want to play another game.";
    reset();
  } else if (playerScore == 5) {
    finalScore.textContent = "You win this game! \n Choose another shape if you want to play another game.";
    reset();
  }
  else if (cpuScore != 5 && playerScore != 5){
    finalScore.textContent = "";
  }
});

// Declare a Reset function that resets the scores when a side reaches 5
function reset() {
  cpuScore -= cpuScore;
  playerScore -= playerScore;
}