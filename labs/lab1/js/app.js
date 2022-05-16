// Declaring global variables to use in each function.
var backgroundColor = "#000";
var yellow = "#FFFF00";
var pellets = "#FFFF";
   
//creating the function 'setup'
function setup () {

    //sets up a canvas that's 500 X 500 pixels
    createCanvas(500,500);

    //establishing variable 'backgroundColor' to add a background color
    background(backgroundColor)
}

// Setting up function 'draw'
function draw () {


    // gives pacman a border color and defines the size of border
    stroke(255,204,0);
    strokeWeight(4)

    //Using var 'yellow' so we don't have to keep typing hex code
    //Making a circle with (x,y = 100, 250) and diameter of 75

    fill(yellow);
    circle(100,250,75);

    //Creating Pacman's mouth
    //Making sure stroke isn't included with the triangle shape

    noStroke();
    fill(backgroundColor)
    triangle(125, 250, 500, 150, 500, 350)
    //Creating Pacman's Power Pellets
    //Making each one have the same y value so they're lined up properly
    fill(pellets);
    circle(450,250,25);

    fill(pellets);
    circle(350,250,25);

    fill(pellets);
    circle(250,250,25);

} 

//End of function
