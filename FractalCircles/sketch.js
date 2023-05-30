// Fractal Circles

let numOfCircle = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // keyIsUsed();
  fractalCircle(width/2, height/2, width, numOfCircle);
}

function fractalCircle(x, y, diameter, depth) {
  //base case
  circle(x, y, diameter);

  if (depth > 0) {
    depth--;
    //top left side circle
    fractalCircle(x - diameter/4, y + diameter/4, diameter/2, depth);
    //top right side circle
    fractalCircle(x + diameter/4, y + diameter/4, diameter/2, depth);
    //bottom left side circle
    fractalCircle(x - diameter/4, y - diameter/4, diameter/2, depth);
    //bottom right side circle
    fractalCircle(x + diameter/4, y - diameter/4, diameter/2, depth);
  }
}

function keyPressed() {
  if (key === "m") {
    numOfCircle++;
  }
  if (key === "l") {
    numOfCircle--;
  }
}