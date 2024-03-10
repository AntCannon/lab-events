// get board
const board = document.querySelector(".tic-tac-toe");

// - [ ] Write a function called `makeBoard()` that will generate 9 `div` with the class `empty` and another class `square`.
function makeBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("empty");
    makeMove(square);
    board.appendChild(square);
  }
}

makeBoard();

// get squares
const squares = document.querySelectorAll(".square");

let playerTurn = 0;

// display players Turn
const playerNode = document.querySelector(".player");
playerNode.innerText = "X"


function makeMove(square) {
  square.addEventListener("click", () => {
    if (square.classList.contains("empty")) {
      console.log("square is empty");
      square.classList.remove("empty");
      square.innerText = playerNode.innerText;
      playerNode.innerText = playerNode.innerText === "X" ? "O" : "X";
    }
  })
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  board.innerHTML = "";
  makeBoard();
})