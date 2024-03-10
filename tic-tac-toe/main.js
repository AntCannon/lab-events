
// - [ ] Write a function called `makeBoard()` that will generate 9 `div` with the class `empty` and another class `square`.
function makeBoard() {
  const board = document.querySelector(".tic-tac-toe");
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("empty");
    board.appendChild(square);
    
  }
}

makeBoard();

// get squares
const squares = document.querySelectorAll(".square");

let playerTurn = 0;

function makeMove() {
  for (let square of squares) {
    square.addEventListener("click", () => {
      if (square.classList.contains("empty")) {
        console.log("square is empty");
        square.classList.remove("empty");
        playerTurn++;
        square.innerText = playerTurn % 2 ? "X" : "O";
      }
    })
  }
}

makeMove();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  for (let square of squares) {
    square.classList.add("empty");
    square.innerText = "";
  }  
})