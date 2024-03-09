// number of squares across
const form = document.createElement("form");
const numSquaresInput = document.createElement("input");
numSquaresInput.setAttribute("type", "number" );
numSquaresInput.setAttribute("min", "1" );
numSquaresInput.setAttribute("max", "20" );
numSquaresInput.setAttribute("placeholder", "Number of Squares");
numSquaresInput.style.width = "100px"
numSquaresInput.value = "10"

const submitButton = document.createElement("button");
submitButton.innerText = "Submit";


form.appendChild(numSquaresInput);
form.appendChild(submitButton);

form.style.display = "block"
form.style.marginBottom = "20px"
form.style.textAlign = "center"

const header = document.querySelector("header");
header.after(form)

// change number of columns in canvas
const canvas = document.querySelector("#canvas");

// get the width of the canvas
let canvasWidth = +window.getComputedStyle(canvas).width.slice(0, -2);

// set the number of columns
let numColumns = numSquaresInput.value;

// cell calculations
// cell width = canvas width / numColumns
let cellWidthPx = (canvasWidth / numColumns).toString() + "px";

// change the grid-template-columns in the canvas
canvas.style.gridTemplateColumns = `repeat(${numColumns}, ${cellWidthPx})`;

// current color is set when you click on the palette color
// create current color node
const currentColor = document.querySelector("#current-color");

// add event listener to palette
// get all palettes
const colorCollection = document.querySelectorAll(".color");

for (let color of colorCollection) {
  color.addEventListener("click", (event) => {
    currentColor.style.background = event.target.style.background;
  })
}

// get all cells
let allCells = document.querySelectorAll(".cell")

function generateCanvas() {
  if (numSquaresInput.value < 2) {
    numSquaresInput.value = 2
  } 
  if (numSquaresInput.value > 20) {
    numSquaresInput.value = 20
  } 
  numColumns = numSquaresInput.value;
  cellWidthPx = (canvasWidth / numColumns).toString() + "px";
  canvas.style.gridTemplateColumns = `repeat(${numColumns}, ${cellWidthPx})`;
  canvas.innerHTML = "";

  // loop the create creation of divs to fill canvas
  for (let i = 1; i <= numColumns**2; i++) {
    // create div
    const cell = document.createElement("div");
    // make the cells square
    cell.style.width = cellWidthPx;
    cell.style.height = cellWidthPx;
  
    // add .cell class
    cell.classList.add("cell");
    //add event listener
    cell.addEventListener("click", (event) => {
      cell.style.background = currentColor.style.background;
    })
    // append to canvas
    canvas.appendChild(cell);
  }

  // preload all cells
  allCells = document.querySelectorAll(".cell")
}

generateCanvas();

submitButton.addEventListener("click", (event) => {
  event.preventDefault()
  generateCanvas(); 
})

function canvasFill() {
  for (let cell of allCells) {
    cell.style.background = currentColor.style.background
  }
}