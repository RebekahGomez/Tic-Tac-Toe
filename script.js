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

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText == "") {
      event.target.innerText = currentPlayer;

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  currentPlayer = "X";
})


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