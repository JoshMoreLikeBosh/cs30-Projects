// 2d array grid demo
// Your Name
// Date

// let grid = [[0, 1, 1, 1],
//             [1, 1, 0, 0],
//             [1, 1, 1, 1],
//             [0, 1, 0, 1]];

let grid;
const ROWS = 50;
const COLS = 50;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS, COLS);

  if (width < height) {
    cellSize = width/ROWS;
  } 
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = createRandomGrid(ROWS, COLS);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  grid[y][x] = !grid[y][x];
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}