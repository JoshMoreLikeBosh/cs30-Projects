// Project Title

let triangleVert = [
  {x: 500, y: 50},
  {x: 50, y: 750},
  {x: 950, y: 750}
];

let theColors = ["salmon", "lime", "lightblue", "lavender", "blue", "purple", "green", "black"];
let depth = 1;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  goober(triangleVert, depth);


}

function goober(points, depth) {
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  
  if (depth > 0) {
    // draw bottom left triangle
    goober([getMidPoint(points[0], points[1]),
            points[1],
           getMidPoint(points[1], points[2]),
           points[1]], 
           depth-1);  

    // draw bottom right triangel
    goober([getMidPoint(points[0], points[2]),
            getMidPoint(points[1], points[2]),
            points[2]], 
            depth-1);  

    // draw top triangel
    goober([points[0],
            getMidPoint(points[0], points[1]),
            getMidPoint(points[0], points[2])], 
            depth-1);  
  }
}

function getMidPoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidPoint = {x: xDiff/2, y: yDiff/2};
  return theMidPoint;
}


function keyPressed() {
  if (key === "m") {
    depth++;
  }
  if (key === "l") {
    depth--;
  }
}