// Grid Project
// Dosh
// March 23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 20;
let cam;
let delta = 0;
let grid;
const ROWS = gridSize;
const COLS = gridSize;
let boxSize = 30;

let boxStuff = {};

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  cam = createCamera();
  // set initial pan angle

  angleMode(DEGREES);
  
  translate(-100, 0, 0);

}

function draw() {
  background(200);

  // pan camera according to angle 'delta'
  cam.pan(0 * 0.01);

  // every 160 frames, switch direction

  rotateX(-40);
  rotateY(130)



  //createBox();
  //box(boxSize, boxSize, boxSize);
  translate(boxSize, 0, 0);

  createBox();

}

function createBox() {
  for (let i = 0; i < gridSize; i++) {
    translate(boxSize+5, 0, 0);
    box(boxSize, boxSize, boxSize);
  }
}