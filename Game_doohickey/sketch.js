// Color game
// Joshua Wright
// March 21, 2023

let numberOfSquares = 5;

const ROWS = numberOfSquares;
const COLS = numberOfSquares;
let grid;
let cellSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2dArray(ROWS, COLS);

  //fill largest square area possible
  if (width < height) {
    cellSize = width/COLS;
  } 
  else {
    cellSize = height/ROWS;
  }
  mousePressed();
}

function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  toggleCell(x, y);
  toggleCell(x+1, y);
  toggleCell(x-1, y);
  toggleCell(x, y+1);
  toggleCell(x, y-1);

}

function toggleCell(x, y) {
  if (x >= 0 && x < COLS && y>= 0 && y < ROWS) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
  
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill("blue");
      }
      else if (grid[y][x] === 0) {
        fill("orange");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function createEmpty2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}