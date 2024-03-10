// adjust body height
document.querySelector("body").style.height = "100%";

// form - number of squares
const form = document.createElement("form");
form.style.display = "block"
form.style.marginBottom = "20px"

// label grid size
const label = document.createElement("label");
label.setAttribute("for", "grid-size");
label.innerText = "Set Grid Size:";
label.style.marginRight = "10px";
label.style.fontWeight = "bold";

// input box
const numSquaresInput = document.createElement("input");
numSquaresInput.setAttribute("type", "number" );
numSquaresInput.setAttribute("name", "grid-size" );
numSquaresInput.setAttribute("min", "1" );
numSquaresInput.setAttribute("max", "20" );
numSquaresInput.setAttribute("placeholder", "Number of Squares");
numSquaresInput.value = "10";
numSquaresInput.style.width = "100px";
numSquaresInput.style.marginRight = "10px";

// submit button
const submitButton = document.createElement("button");
submitButton.innerText = "New Canvas";

form.appendChild(label);
form.appendChild(numSquaresInput);
form.appendChild(submitButton);

// append form
const header = document.querySelector("header");
header.after(form);

// fillCanvas button
const fillButton = document.createElement("button");
fillButton.innerText = "Fill Canvas";
fillButton.style.marginBottom = "50px"

// append fillCanvas button
const wrapper = document.querySelector("#wrapper");
wrapper.appendChild(fillButton);
wrapper.style.textAlign = "center";

// change palette height to fit-content for responsiveness
document.querySelector("#palette").style.height = "fit-content";

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
    numSquaresInput.value = 2;
  } 
  if (numSquaresInput.value > 20) {
    numSquaresInput.value = 20;
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
  allCells = document.querySelectorAll(".cell");
}

generateCanvas();

// new canvas button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateCanvas(); 
})

// canvas fill
function fillCanvas() {
  for (let cell of allCells) {
    cell.style.background = currentColor.style.background;
  }
}

fillButton.addEventListener("click", () => {
  fillCanvas();
})