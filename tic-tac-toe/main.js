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

function makeMove(square) {
  square.addEventListener("click", () => {
    if (square.classList.contains("empty")) {
      console.log("square is empty");
      square.classList.remove("empty");
      playerTurn++;
      square.innerText = playerTurn % 2 ? "X" : "O";
    }
  })
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  board.innerHTML = "";
  makeBoard();
})