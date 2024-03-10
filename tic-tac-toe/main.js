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

// - [ ] Call `makeBoard()` on page load so that 9 squares appear and the board is 3 x 3 squares.

// - [ ] Write a function called `makeMove()` that is an event handler for the `div`s with the class of `square` that