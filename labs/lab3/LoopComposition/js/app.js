//Loop Composition With An Array

var circleY = [0,1,2,3,4]; //Creating an array called circleY; Easily change number of circles in composition by adjusting array.

function setup () {
    createCanvas (800,600); //Setting up canvas size
}

function draw() {
    background(173,216,230);
    stroke(255,255,224);
    strokeWeight(5);

    var r = 0;
    while (r < 100) {
        r += 10;
        for (var i = 0; i < circleY.length; i++) { //length of the array determines the number of circles falling
            fill(255,182,193);
            circle((i+2)*100, circleY[i], 50);
            circleY[i] += 0.5; //speed of the circles falling
  
        }
    }
}