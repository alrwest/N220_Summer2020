//Dripping Water App
//5 pixels per frame -> i +=5 (or i = i + 5)

let droplet = []; //declaring an empty array for water droplets

function setup () {
    createCanvas(600, 600);
    for (let i = 0; i < 30; i+=5) { //for loops creating droplets at 5 pixels per frame, with 30 droplets in array

        droplet[i] = random(height); //setting random height to make it look more organic, and not perfectly in a row
    }
}

function draw() {
    background(162, 199, 224);

    for (let i = 0; i < droplet.length; i+=5) { //for loop that runs as long as the array's length at 5 pixels per frame
        let dropletX = width * i / droplet.length; //creating a variable to store X location of circles 

        //creating a circle with radius of 20; x location = dropletX, y location = droplet[i]
        circle(dropletX, droplet[i], 20); 

        //Designing the water droplets
        fill(80, 177, 242);
        stroke(7, 64, 102);
        strokeWeight(5);

        droplet[i]+= 5; //droplets fall at 5 pixels per frame

      if (droplet[i] > height) { // restarts the array if the droplets' value ia larger than the height
        droplet[i] = 0;
      }
    }
}