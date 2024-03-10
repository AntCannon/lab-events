let isActive = true;

// get board
const board = document.querySelector(".tic-tac-toe");
const boardMap = {};

function makeBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("empty");
    const spot = String.fromCharCode(97 + i);
    square.classList.add(`${spot}`)
    makeMove(square);
    board.appendChild(square);
  }
}

makeBoard();

// get squares
const squares = document.querySelectorAll(".square");

// get and update spot nodes
let a, b, c, d, e, f, g, h, i;
function updateSpots() {
  a = document.querySelector(".a").innerText
  b = document.querySelector(".b").innerText
  c = document.querySelector(".c").innerText
  d = document.querySelector(".d").innerText
  e = document.querySelector(".e").innerText
  f = document.querySelector(".f").innerText
  g = document.querySelector(".g").innerText
  h = document.querySelector(".h").innerText
  i = document.querySelector(".i").innerText
}
// check winner
function hasWinner(square) {
  if (a && a === b && b === c ||
    d && d === e && e === f ||
    g && g === h && h === i ||
    
    a && a === d && d === g ||
    b && b === e && e === h ||
    c && c === f && f === i ||
    
    a && a === e && e === i ||
    c && c === e && e === g) {
      setTimeout(() => {
        alert(`${square.innerText} is the Winner!`)
      }, 250);
      isActive = false;
  }
}

// player turns
let turns = 0;
const playerNode = document.querySelector(".player");
playerNode.innerText = "X"

function makeMove(square) {
  square.addEventListener("click", (e) => {
    if (isActive) {
      if (square.classList.contains("empty")) {
        square.classList.remove("empty");
        square.innerText = playerNode.innerText;
        updateSpots();
        if (turns > 3) hasWinner(square);
        playerNode.innerText = playerNode.innerText === "X" ? "O" : "X";
        turns++;
        isGameOver();
      }
    }
  })
}

// turn game over alert
function isGameOver() {
  if (turns === 9) {
    setTimeout(() => {
      alert("Game is Over")
    }, 250);
  }
} 

// reset board
const button = document.querySelector("button");
button.addEventListener("click", () => {
  board.innerHTML = "";
  makeBoard()
  turns = 0;
})