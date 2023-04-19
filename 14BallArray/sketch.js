// ball thing

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = random(10, 40);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(100, 255);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    //bounce off wall if required
    // left and right bounce
    if (this.x - this.radius <= 0 || this.x + this.radius >= windowWidth) {
      this.dx *= -1;
    }
    // top and bottom bounce
    else if (this.y - this.radius <= 0 || this.y + this.radius >= windowHeight) {
      this.dy *= -1;
    }

  }

  collisionCheck(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiisum = this.radius + otherBall.radius; 

    if (distanceApart < radiisum) {
      //collision!!!

      // explode on collision
      otherBall.radius *= 2;

      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}



let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  for (let someBall of ballArray) {
    someBall.update();
    for (let otherBall of ballArray) {
      if (someBall !== otherBall) {
        someBall.collisionCheck(otherBall);
      }
    }
    someBall.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}