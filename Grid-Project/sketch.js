// Grid Project
// Dosh
// March 23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cam;
let delta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  cam = createCamera();
  // set initial pan angle
  cam.pan(50.4);



}

function draw() {
  background(200);

  // pan camera according to angle 'delta'
  cam.pan(delta);

  // every 160 frames, switch direction


  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);

  translate(-100, 0, 0);
  box(200, 10, 200);

}