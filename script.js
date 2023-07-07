// Steps for Tic-Tac-Toe
// 1. Create the 3x3 grid
// 2. Create 2 players
// 3. Add eventListeners to each box - when a box is clicked, the square
//    gets filled in or an X or O is placed there
// 4. Prevent a square from being clicked again unless game is reset
// 5. Have reset button that resets the game
// 6. Create a function or something that tells the user when a player
//    has won - a pop-up or something should appear when a player gets 
//    3 squares in a row.

let boxes = document.querySelectorAll(".box");
let currentPlayer = "X"
let gameOver = false;

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    if (!gameOver && event.target.innerText == "") {
      event.target.innerText = currentPlayer;

      if (checkForWin()) {
        gameOver = true;
        setTimeout(() => {
          alert(`${currentPlayer} wins!`);
        }, 10);
      } else if (checkForTie()) {
        setTimeout(() => {
          alert("It's a tie!");
        }, 10);
      }
      if (!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  currentPlayer = "X";
  gameOver = false;
})

function checkForWin() {
  let boxesArray = Array.from(boxes);

  let values = boxesArray.map(box => box.innerText);

  for (let i = 0; i < 9; i += 3) {
    if (values[i] === currentPlayer && values[i + 1] === currentPlayer && values[i + 2] === currentPlayer) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (values[i] === currentPlayer && values[i + 3] === currentPlayer && values[i + 6] === currentPlayer) {
      return true;
    }
  }

  if (values[0] === currentPlayer && values[4] === currentPlayer && values[8] === currentPlayer) {
    return true;
  }

  if (values[2] === currentPlayer && values[4] === currentPlayer && values[6] === currentPlayer) {
    return true;
  }

  return false;
}

function checkForTie() {
  let allBoxesFilled = true;
  let boxesArray = Array.from(boxes);
  for (let i = 0; i < boxesArray.length; i++) {
    if (boxesArray[i].innerText === "") {
      allBoxesFilled = false;
      break;
    }
  }
  return allBoxesFilled;
}


// Below is the same lines of code but written with arrow functions
// versus traditional function syntax
// ARROW FUNCTION
// boxes.forEach((box) => {
//   box.addEventListener("click", (event) => {
//     console.log("Box clicked", event.target);
//   });
// });
// TRADITIONAL FUNCTION
// boxes.forEach(function (box) {
//   box.addEventListener("click", function (event) {
//     console.log("Box clicked", event.target);
//   })
// }) 

// Below is the same lines of code written in ternary operation
// versus traditional if-else statement. Both lines of code switch
// between X and O players after the click event in the eventHandler
// TERNARY
// currentPlayer = currentPlayer === "X" ? "O" : "X";

// TRADITIONAL IF-ELSE
// if (currentPlayer === 'X') {
//   currentPlayer = 'O';
// } else {
//     currentPlayer = 'X';
// }

// Everything below here is what Raul went over in class.
// I had already completed the project but wanted to follow along.

// const statusDisplay = document.querySelector(".game--status");

// let gameActive = true;
// let currentPlayer = "X";
// let gameState = ["", "", "", "", "", "", "", "", ""];

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => "Game ended in a draw";
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`;

// statusDisplay.innerText = currentPlayerTurn();

// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 4, 8],
//   [2, 4, 6],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
// ];

// function handleCellPlayed(clickedCell, i) {
//   gameState[i] = currentPlayer;
//   clickedCell.innerText = currentPlayer;
// }

// function handlePlayerChange() {
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
//   statusDisplay.innerText = currentPlayerTurn();
// }

// function handleResultValidation() {
//   let roundWon = false;

//   for (let i = 0; i < winningConditions.length; i++) {
//     const winningCondition = winningConditions[i]; // [0, 1, 2] on first iteration
//     let a = gameState[winningCondition[0]];
//     let b = gameState[winningCondition[1]];
//     let c = gameState[winningCondition[2]];

//     if (a === "" || b === "" || c === "") {
//       continue;
//     }

//     if (a == b && b == c) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     statusDisplay.innerText = winningMessage();
//     gameActive = false;
//     return;
//   }

//   let roundDraw = !gameState.includes("");
//   if (roundDraw) {
//     statusDisplay.innerText = drawMessage();
//     gameActive = false;
//     return;
//   }

//   handlePlayerChange();
// }

// function handleCellClick(e) {
//   const clickedCell = e.target;
//   const index = parseInt(clickedCell.dataset.index);

//   if (gameState[index] !== "" || !gameActive) {
//     return;
//   }

//   handleCellPlayed(clickedCell, index);
//   handleResultValidation();
// }

// function handleRestartGame() {
//   gameActive = true;
//   currentPlayer = "X";
//   gameState = ["", "", "", "", "", "", "", "", ""];
//   statusDisplay.innerText = currentPlayerTurn();
//   document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
// }

// // Step 1
// document.querySelectorAll(".cell").forEach((cell) => {
//   cell.addEventListener("click", handleCellClick);
// });

// document
//   .querySelector(".game--restart")
//   .addEventListener("click", handleRestartGame);