// Grid Project
// Dosh
// March 23
//
// All Controls (theres alot):
// w = pan cam up
// a = pan cam left
// s = pan cam down
// d = pan cam right
// q = move cam forward
// e = move cam back
// t, f, g, h = rotate cubes
// k = shrink
// l = expand
// z = reset cubes to default
// arrowkeys = tilt cam in direction, like turning head

let gridSize = 20;
let cam;
let grid;
const ROWS = gridSize;
const COLS = gridSize;
let boxSize = 60;
let boxGap = -60;
let images;
let imagenum = prompt("what's the box texture! 0 to 9");
let SkyBoxnum = prompt("what's the skybox 0 - 9");
let backgroundColor = prompt("what should the background color be?")
let shapeType;
let theShapenum = prompt("whats the shape? 0 - 5");
let stuff;

function preload() {
  images = [];
  images.push(loadImage("nubianape.gif")); //0
  images.push(loadImage("200w.gif")); // 1
  images.push(loadImage("argh.gif")); // 2
  images.push(loadImage("ben.png")); // 3
  images.push(loadImage("emoji.png")); // 4
  images.push(loadImage("psp.png")); // 5
  images.push(loadImage("taxevasive.jpg")); // 6
  images.push(loadImage("skry.png")); // 7
  images.push(loadImage("sky2.jpg")); // 8
  images.push(loadImage("stupidshiteater.gif")); // 9

  shapeType = [];
  shapeType.push(sphere); // 0
  shapeType.push(box); // 1
  shapeType.push(torus); // 2
  shapeType.push(plane); // 3
  shapeType.push(cone); // 4
  shapeType.push(cylinder); // 5


  stuff = [];
  stuff.push(images);
  stuff.push(shapeType);
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
  
  background(backgroundColor);
  
  createSkyBox();

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
        texture(stuff[0][imagenum]);
        stuff[1][theShapenum](boxSize, boxSize, boxSize);
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
  //  l shrink
  if (keyIsDown(75)) {
    boxGap+=3;
    console.log(boxGap);
  }
  //  k expand
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
  //h rotate
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
  // z reset all
  if (keyIsDown(90)) {
    boxGap = -60;
  }
}

function createSkyBox() {
  //fill("red");
  texture(stuff[0][SkyBoxnum]);
  box(7500, 7500, 7500);
}

