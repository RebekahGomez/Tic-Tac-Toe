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