//const { Color } = require("../../../../.vscode/extensions/wmcicompsci.cs30-p5-1.5.0/p5types");

// OOP walker demo
let walkerArray;


class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    else if (choice < 100) {
      //right
      this.x += this.speed;
    }
  }
}

let kevin;
let wasi;

function setup() {
  walkerArray = [];
  createCanvas(windowWidth, windowHeight);
  walkerArray.push(new Walker(width/2, height/2, "red"));
}

function draw() {
  walkerArray.forEach(walker => {
    walker.move();
    walker.display();
  });
}

function mousePressed() {
  walkerArray.push(new Walker(mouseX, mouseY, color(random(255), random(255), random(255))));
}
