//Circles Inside of Circles
//Create pattern using only one line of drawing code.

function setup () {
    createCanvas (500,500);
}

function draw () {
    background(225);

    //With noFill () executed, we will be able to see the circle pattern.
    noFill();

    //'For' loop is stated; variable 'i' is created and it's value set to 0. The iterand will add one to its value and store it like a counter. Once 'i' reaches 50, it will stop. //

    for (var i = 0; i < 50; i++) {
        //Only one line of drawing code is needed to create the pattern. x, y(250,250) of a 500 by 500 canvas positions the pattern at the center, and the circle's radius is equivalent to 'i's value multiplied by 5. That creates the circles inside of a larger circle effect. //
        circle(250,250, i*5);
    }

}