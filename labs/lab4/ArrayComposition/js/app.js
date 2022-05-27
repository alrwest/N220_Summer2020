//Array Composition
//recreating a fizzy class of soda with an array, a class, and loops


let fizz = []; //setting up an array

function setup () {
    createCanvas(400, 600);
    for (var i = 0; i < 20; i++) { //
        let x = random(width); //random width position
        let y = random(height); //random height position
        let r = random(1,50); //creates random bubble sizes with radius range 1-50
        fizz[i] = new Drink(x,y,r);
    }
}

    function draw () {
        background(60,48,36); //cola color for background

        //running through the length of the array 'fizz', adding 1 + i and storing it each time
        for (var i = 0; i < fizz.length; i++) { 
            fizz[i].jitter(); //calling class method for movement
            fizz[i].display(); //calling class method to show fizz
        }
    }

    class Drink { //creating a class called drink

        constructor(x,y,r) { //creating a constructor to create objects

            //create properties with 'this'
            this.x = x; 
            this.y = y;
            this.r = r;
        }

        //creating class methods

        jitter() { //creating the movement/fizziness with random positions
            this.x = this.x + random(-3,3);
            this.y = this.y + random(-3,3);
        }

        display() { //designing the fizz/bubbles
            stroke(250);
            strokeWeight(3);
            fill(176,216,230);
            ellipse(this.x,this.y, this.r*2); //displays fizz position, adjusts size of bubbles
        }

    }

