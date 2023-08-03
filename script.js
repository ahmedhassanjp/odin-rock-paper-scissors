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
function playGround(type) {

  const result = type;

  const roundMessage = document.getElementById('round-result');
  const cpuMessage = document.getElementById('cpu');

  // Game Logic
  const cpu = getComputerChoice();
  cpuMessage.textContent = `The Computer chose ${cpu}!`
  roundMessage. textContent = ""
  if (result === cpu) {
    roundMessage.textContent = "Tie game!"
  } else if (result === "Rock" && cpu === "Paper"
  || result === "Paper" && cpu === "Scissors"
  || result === "Scissors" && cpu === "Rock") {
    roundMessage.textContent = `You Lose! ${cpu} beats ${result}.`;
  } else if (result === "Paper" && cpu === "Rock"
  || result === "Scissors" && cpu === "Paper"
  || result === "Rock" && cpu === "Scissors") {
    roundMessage.textContent = `You Win! ${result} beats ${cpu}.`;
  }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', () => {
  playGround("Rock");
});

paper.addEventListener('click', () => {
  playGround("Paper");
});

scissors.addEventListener('click', () => {
  playGround("Scissors");
});







