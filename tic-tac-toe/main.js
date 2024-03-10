let isActive = true;

// get board node
const board = document.querySelector(".tic-tac-toe");

function makeBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("empty");
    
    // add class to id square
    const spot = String.fromCharCode(97 + i);
    square.classList.add(`${spot}`)
    
    // add event listener to square
    makeMove(square);

    board.appendChild(square);
  }
}

makeBoard();

// get squares
const squares = document.querySelectorAll(".square");

// get spotNodes and update spots
aNode = document.querySelector(".a");
bNode = document.querySelector(".b");
cNode = document.querySelector(".c");
dNode = document.querySelector(".d");
eNode = document.querySelector(".e");
fNode = document.querySelector(".f");
gNode = document.querySelector(".g");
hNode = document.querySelector(".h");
iNode = document.querySelector(".i");

let a, b, c, d, e, f, g, h, i;
function updateSpots() {
  a = document.querySelector(".a").innerText;
  b = document.querySelector(".b").innerText;
  c = document.querySelector(".c").innerText;
  d = document.querySelector(".d").innerText;
  e = document.querySelector(".e").innerText;
  f = document.querySelector(".f").innerText;
  g = document.querySelector(".g").innerText;
  h = document.querySelector(".h").innerText;
  i = document.querySelector(".i").innerText;
}

// check lines for winner
function hasWinner(square) {
  checkLine([[a, b, c], [aNode, bNode, cNode]], square);
  checkLine([[d, e, f], [dNode, eNode, fNode]], square);
  checkLine([[g, h, i], [gNode, hNode, iNode]], square);
  checkLine([[a, d, g], [aNode, dNode, gNode]], square);
  checkLine([[b, e, h], [bNode, eNode, hNode]], square);
  checkLine([[c, f, i], [cNode, fNode, iNode]], square);
  checkLine([[a, e, i], [aNode, eNode, iNode]], square);
  checkLine([[c, e, g], [cNode, eNode, gNode]], square);
}

// Helper Function - chek line for winner and highlight winning squares
function checkLine([[sq1, sq2, sq3], sqNodesArr] ,square) {
  if (sq1 && sq1 === sq2 && sq2 === sq3) {
    for (let sqN of sqNodesArr) {
      sqN.style.background = "rebeccapurple";
    }
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
      alert("Game is Over");
    }, 250);
  }
} 

// reset board
const button = document.querySelector("button");
button.addEventListener("click", () => {
  board.innerHTML = "";
  makeBoard()
  turns = 0;
  isActive = true;
})