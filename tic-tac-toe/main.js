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


// - [ ] Call `makeBoard()` on page load so that 9 squares appear and the board is 3 x 3 squares.
makeBoard();

// - [ ] Write a function called `makeMove()` that is an event handler for the `div`s with the class of `square` that
// - Checks if the clicked square has the class `empty`.
// - If the square has the class empty add either an `X` or an `O` inside the square, remove the class `empty` and write some logic so that the next time this function is called the other player has a play (first play an X then an O, then an X...).
// - Players should NOT be able to change a full square.

let playerTurn = 0;

function makeMove() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.addEventListener("click", () => {
      if (square.classList.contains("empty")) {
        console.log("square is empty");
        square.innerText = "X";
      }
    })
  }
}

makeMove();