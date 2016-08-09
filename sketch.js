var light;
var mild;
var fuego;

// var mic;
// var micLevel;

function setup() {
  mild = loadSound('assets/mild.m4a');
  // mic = new p5.AudioIn();
  // mic.start();
  
  createCanvas(500, 500);
  background(75);
}

function draw() {
  if(accelerationY > 10) {
    mild.play();
    background(225);
  } else if(accelerationY <= 0 && mild.isPlaying() ) {
    // mild.stop();
    // background(0);
    
    
    
    // if(micLevel >= 0) {
    //   mild.play();
    //   background(255, 200, 75);
    // }
  }
}