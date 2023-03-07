// bouncing ball demo
// using arrays and object notationl

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);
  noStroke();
}

function draw() {
  background("gray");
  moveShapes();
  displayShapes();
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function moveShapes() {
  for (let i=0; i<shapes.length; i++) {
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
    if (shapes[i].x > width-shapes[i].diameter/2 || shapes[i].x < shapes[i].diameter/2) { // bounce off left and right
      shapes[i].dx *= -1;
    }
    if (shapes[i].y > height-shapes[i].diameter/2 || shapes[i].y < shapes[i].diameter/2) { // bounce off top and bot
      shapes[i].dy *= -1;
    }
  }
}

function displayShapes() {
  for (let i=0; i<shapes.length; i++) {
    fill(shapes[i].theColor);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);
  }
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    diameter: random(25, 100),
    theColor: color(random(0), random(0), random(255)),
  };
  shapes.push(newBall);
}