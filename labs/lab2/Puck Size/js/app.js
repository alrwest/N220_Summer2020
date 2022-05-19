// Puck Size App

let x, y; // creating global variables x, y

function setup () {
    createCanvas(400, 300); //creating canvas that's 400 by 300px
    x = width / 2;  //value of x is 1/2 width of canvas
    y = height / 2; //value of y is 1/2 height of the canvas
}


function draw () {
    background (106, 56, 179); //adding a purple background

    // if|else conditional saying if cursor position across the x-axis is less than the width of
    // canvas, the circle will be red; otherwise, it will be blue.
    if (mouseX < x) {
        circle(mouseX, mouseY, 30); // mouseX and mouseY draws circles with a diameter of 30 with the cursor
        noStroke();
        fill(173,216,230); //Circles drawn on the right side need to be red

    } else {
        circle(mouseX, mouseY, 30);
        noStroke();
        fill(254, 66, 60); //Circles drawn on the left need to be blue
    }
}