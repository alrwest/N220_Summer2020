//Space Invaders!
//creating global variables
var player;
var invaders = []; //creating an array to generate invaders/aliens

function Player() {
    this.x = height/2; //positioning the player
    this.show = function() { //creating a constructor function for the ship object
        fill(255,250,250); 
        rect(this.x, width/2, 50, 50); //creating a rectangle for the player's ship
    }
}
function setup() {
    createCanvas(800, 600);
    background(32, 54, 105); //creating a navy background
    player = new Player(); // constructor function con't

    //beginnings of a for loop that will call the invaders
    for (var i = 0; i < 10; i++) {
    }
}
function draw() {
    noStroke();
    player.show();
    for (var i = 0; i < invaders.length; i++) {
        invaders[i].show();
    }
}
//Beginnings of a keypressed function to allow player to move left and right
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player.move(8); //the larger the number, greater the speed. 
     } else if (keyCode === LEFT_ARROW){
            player.move(-8); //since value is negative, it changes the position
        }
}

//creating a function to display player score
//function Score() {
 //   noStroke();
  //  fill(245, 255, 250);
//}