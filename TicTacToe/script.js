// Accessing necessary DOM elements
let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
// Convert the boxes into an array
let boxes = Array.from(document.getElementsByClassName("box"));

// Retrieving the winning indicator color from CSS custom property
let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

// Constants for player symbols
const oText = "O";
const xText = "X";

// Initial player
let currentPlayer = xText;

// Array to track the state of each space
let spaces = Array(9).fill(null);

// Function to initialize the game
const startGame = () => {
  // Adding click event listeners to each box
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

// Function to handle box click event
function boxClicked(e) {
  const id = e.target.id;

  // Check if the space is empty
  if (!spaces[id]) {
    // Update space with current player symbol
    spaces[id] = currentPlayer;
    // Display player symbol in the clicked box
    e.target.innerText = currentPlayer;

    // Check if a player has won
    if (playerHasWon() != false) {
      // Display winning message
      playerText.innerText = `${currentPlayer} has won!`;
      // Highlight winning boxes
      let winning_blocks = playerHasWon();
      winning_blocks.map(
        (box) => (boxes[box].style.backgroundColor = winnerIndicator)
      );
      return;
    }

    // Switch to the next player
    currentPlayer = currentPlayer == xText ? oText : xText;
    playerText.innerText = currentPlayer;
  }
}

// Array of winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to check if a player has won
function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      // Disable remaining boxes
      disableRemainingBoxes();
      return [a, b, c];
    }
  }
  return false;
}

function disableRemainingBoxes() {
  // Remove click event listeners from each box
  boxes.forEach((box) => box.removeEventListener("click", boxClicked));
}

// Event listener for restart button click
restartBtn.addEventListener("click", restart);

// Function to restart the game
function restart() {
  // Reset spaces array
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  // Clear the text in each box
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  // Reset player text
  playerText.innerText = "Tic Tac Toe";
  // Set current player to 'X'
  currentPlayer = xText;
}

// Start the game
startGame();
