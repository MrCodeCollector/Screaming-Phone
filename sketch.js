var light;
var mild;
var fuego;

function setup() {
  mild = loadSound('assets/mild.m4a');
  
  createCanvas(500, 500);
  background(75);
}

function draw() {
  if(accelerationY > 0) {
    mild.play();
    background(225);
  } else if(accelerationY <= 10 && mild.isPlaying() ) {
    mild.stop();
    background(0);
  }
}