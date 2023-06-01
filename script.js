// Declare computerChoice function that generates a random choice
function getComputerChoice() {
  // Create an array of choices
  const choices = ["Rock", "Paper", "Scissors"];
  // Create a logic for choosing the random choice from the array
  var choice = Math.floor(Math.random() * 3);          /* Since [choices.length = 3] */
  // Return the chosen choice
  return choices[choice];
}

// Declare playGround function that holds the game logic
function playGround() {
  // In the next 3 lines we try to manipulate the prompt value taken from user so that it's not case-sensetive by:
  // 1- Target the first character of prompt value
  const capLetter = playerSelection.charAt(0).toUpperCase();
  // 2- Lowercase the rest of the prompt value characters exept for the firt one
  const remainLetters = playerSelection.slice(1).toLowerCase();
  // 3- Concatenate the 2 parts together
  const result = capLetter + remainLetters;

  // Game Logic
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

// Create prompt asking user for his choice against cpu
var playerSelection = prompt("Rock, paper or scissors?");

// Declare function game to call the function playGround to repeat the game 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    playGround();
  }
}

// Calling the function
game();