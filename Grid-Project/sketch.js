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
let boxGap = 0;

let boxStuff = {};

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  cam = createCamera();
  // set initial pan angle

  angleMode(DEGREES);
  // cam.tilt(-5);
  cam.lookAt(-25, 0, 10);
  cam.tilt(3);
  cam.pan(3);
  //cam.setPosition(30 * 15, 30 * 15, 30 * 15);
  //translate(30*30, 0, 0);
  rotateX(-45);
  rotateY(137);
}

function draw() {
  background(200);

  if (keyIsDown(39)) {
    cam.pan(0.5);
  }
  if (keyIsDown(37)) {
    cam.pan(-0.5);
  }
  if (keyIsDown(38)) {
    cam.tilt(-0.5);
  }
  if (keyIsDown(40)) {
    cam.tilt(0.5);
  }
  if (keyIsDown(75)) {
    boxGap+=3;
  }
  if (keyIsDown(76)) {
    boxGap-=3;
  }


  // box rotate
  if (keyIsDown(84)) {
    rotateX(3);
  }
  if (keyIsDown(71)) {
    rotateX(-3);
  }


  



  //createBox();
  //box(boxSize, boxSize, boxSize);
  translate(boxSize, 0, 0);

  createBox();

}

function createBox() {
  for (let i = 0; i < gridSize; i++) {
    translate(boxGap+boxSize, 0, 0);
    push();
    for (let j = 0; j < gridSize; j++) {
      push();
      for (let l = 0; l < gridSize; l++) {
        translate(0, boxGap+boxSize, 0);
        box(boxSize, boxSize, boxSize);
      }
      pop();
      translate(0, 0, boxGap+boxSize);
      
    }
    pop();

  }
}

function keyTyped() {
  if (key === "o") {
    boxGap+=3;
  }
  else if (key === "p") {
    boxGap-=3;
  }
  else if (key === "w") {
    cam.tilt(3);
  }
  else if (key === "s") {
    cam.tilt(-3);
  }
  else if (key === "a") {
    cam.pan(-3);
  }
  else if (key === "d") {
    cam.pan(3);
  }
}

