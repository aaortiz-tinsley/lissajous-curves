var blackColor;
var greenColor;
var wavelengthOne = 125;
var wavelengthTwo = 120;
var pointCount = 0;
var amplitude = 200;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  greenColor = color(142, 255, 100);
  blackColor = color("#131313");
}

function draw() {
  background(blackColor);
  fill(greenColor);
  stroke(blackColor);
  strokeWeight(2);
  translate(windowWidth/2, windowHeight/2);
  if(pointCount > 500000) {
    noLoop();
  }
  beginShape();
    for(i=0; i < pointCount; i++) {
      angle = i/wavelengthOne * TWO_PI;
      var x = sin(radians(angle)) * amplitude;
      angle = i/wavelengthTwo * TWO_PI;
      var y = cos(radians(angle)) * amplitude;
      vertex(x,y);
  }
  endShape();
  pointCount+=100;
}
