// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing;
let x = 50;
let y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  lotsOfLines(x, y);
  numberChange(x, y);
}

function draw() {
  
}

function lotsOfLines(cols, rows) {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let spaceAmount = width/cols;
      diagonalLine(x * spaceAmount, y * spaceAmount, spaceAmount);
    }
  }
}



function diagonalLine(x, y, spacing) {

  if (random(100) > 50) {
    //pos slope
    line(x - spacing/2, y + spacing/2, x + spacing/2, y - spacing/2);

  }
  else {
    // neg slope
    line(x - spacing/2, y - spacing/2, x + spacing/2, y + spacing/2);

  }
}

function numberChange(x, y) {
  if (keyIsPressed(UP_ARROW)) {
    x + 10;
    y + 10;
  }
}