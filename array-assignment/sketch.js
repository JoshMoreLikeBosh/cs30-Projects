// Arrays and Pbject Notation Assignment
// Josh Wright
// March 8, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// idea make a square that rotates and bit and shrinks a bit

let x;
let y;
let rectSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  rectSize = 500
  rectMode(CENTER);
}

function draw() {
  //background(220);
  drawSquare();
}

function drawSquare() {
  rect(x, y , rectSize, rectSize);
  rotate(5);
}

// let boxes = [];
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
//   rectMode(CENTER);


//   for (let y=0; y < height; y+=50) {
//     for (let x = 0; x<width; x+=50) {
//       spawnBox(x, y, 50, random(1000));
//     }
//   }
    
// }

// function draw() {
//   background(220);

//   //display all boxes
//   for (let i=0; i<boxes.length; i++) {
//     displayBox(boxes[i]);
//   }
  
// }

// function displayBox(myBox) {
//   push(); //saving transformation matrix
//   translate(myBox.x, myBox.y);
//   rotate(myBox.rotation);
//   square(0, 0, myBox.size);
//   pop(); //resetting transformation matrix
// }

// function spawnBox(theX, theY, theSize, howRotated) {
//   let someBox = {
//     x: theX,
//     y: theY,
//     size: theSize,
//     rotation: howRotated,
//   };
//   boxes.push(someBox);
// }