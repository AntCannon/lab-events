// change number of columns in canvas
const canvas = document.querySelector("#canvas");

// get the width of the canvas
const canvasWidth = +window.getComputedStyle(canvas).width.slice(0, -2);

// set the number of columns
const numColumns = 10;

// cell calculations
// cell width = canvas width / numColumns
const cellWidthPx = (canvasWidth / numColumns).toString() + "px";

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

// loop the create creation of divs to fill canvas
for (let i = 1; i <= numColumns**2; i++) {
  // create div
  const cell = document.createElement("div");
  // add .cell class
  cell.classList.add("cell");
  //add event listener
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background;
  })
  // append to canvas
  canvas.appendChild(cell);
}