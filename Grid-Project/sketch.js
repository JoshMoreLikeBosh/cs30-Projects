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

let ben;
let boxStuff = {};

function preload() {
  ben = loadImage("nubianape.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  cam = createCamera();
  angleMode(DEGREES);
  cam.lookAt(-25, 0, 10);
  cam.tilt(-30);
  cam.pan(-30);
  cam.setPosition(-1500, 1500, 3000);
 


}

function draw() {
  background(200);

  camMovement();

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
        texture(ben);
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
}

function camMovement() {
  // left arrow pans cam left
  if (keyIsDown(39)) {
    cam.pan(-3);
  }
  // right arrow pans cam right
  if (keyIsDown(37)) {
    cam.pan(3);
  }
  //down arrow tilts cam down
  if (keyIsDown(38)) {
    cam.tilt(-3);
  }
  //  up arrow tilts cam up
  if (keyIsDown(40)) {
    cam.tilt(3);
  }
  //  l expand
  if (keyIsDown(75)) {
    boxGap+=3;
  }
  //  k shrink
  if (keyIsDown(76)) {
    boxGap-=3;
  }


  // box rotate
  //t rotate
  if (keyIsDown(84)) {
    rotateX(millis() / 10);
  }
  //g rotate
  if (keyIsDown(71)) {
    rotateX(millis() / -10);
  }
  //f rotate
  if (keyIsDown(70)) {
    rotateY(millis() / 10);
  }
  if (keyIsDown(72)) {
    rotateY(millis() / -10);
  }

  //q zoom in
  if (keyIsDown(81)) {
    cam.move(0, 0, 40);
  }
  //e zoom out
  if (keyIsDown(69)) {
    cam.move(0, 0, -40);
  }
  //a moves cam left
  if (keyIsDown(65)) {
    cam.move(-15, 0, 0);
  }
  //d moves cam right
  if (keyIsDown(68)) {
    cam.move(15, 0, 0);
  }
  // w moves cam up
  if (keyIsDown(87)) {
    cam.move(0, -15, 0);
  }
  // s moves can down
  if (keyIsDown(83)) {
    cam.move(0, 15, 0);
  }
}