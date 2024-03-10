function load() {
/*
wrapped in a load function because when I hit the rest button something is keeping my highlight function on line 70 from triggering after the first time.
I think it has something to do with the reset button.
*/


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
let aNode = document.querySelector(".a");
let bNode = document.querySelector(".b");
let cNode = document.querySelector(".c");
let dNode = document.querySelector(".d");
let eNode = document.querySelector(".e");
let fNode = document.querySelector(".f");
let gNode = document.querySelector(".g");
let hNode = document.querySelector(".h");
let iNode = document.querySelector(".i");

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

// Helper Function - check line for winner and highlight winning squares
function checkLine([[sq1, sq2, sq3], sqNodesArr] ,square) {
  if (sq1 && sq1 === sq2 && sq2 === sq3) {
    console.log(sqNodesArr)
    for (let sqN of sqNodesArr) {
      console.log(sqN)
      sqN.style.background = "rebeccapurple";
      console.log("highlight")
    }
    setTimeout(() => {
      alert(`${square.innerText} is the Winner!`)
    }, 550);
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
  if (turns === 9 && isActive) {
    setTimeout(() => {
      alert("Game is Over");
    }, 550);
  }
} 


// reset board
const button = document.querySelector("button");
button.addEventListener("click", () => {
  board.innerHTML = "";
  // makeBoard()
  load()
  turns = 0;
  isActive = true;
})

}

load()