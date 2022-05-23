//FizzBuzz
function setup() {
         createCanvas(1800, 300);
    }
    
    function draw() {
        background(193, 222, 7);
        var y = 120; //adjusts centering of the shapes along the y-axis
        for (let i = 0; i < 25; i++) { //loop creating intial 25 circles, starting with 0 
                let x = i*75; //adjusts spacing between shapes

            //using if and else if, and else statements 
            //else if tests a condition if previous condition was false
            
            if (i % 3 == 0 && i % 5 == 0) { //if i's remainder when divided by 3 AND 5 is zero, create a blue square
                fill(9, 107, 181); //blue
                noStroke();
                square(x, y, 50);
            }
             else if (i % 5 === 0) { //if i's remainder when divided by 5 is zero, create a green square
                fill(12, 54, 3); //green
                noStroke();
                square(x, y, 50);
            }
            else if (i % 3 === 0) { //if i's remainder when divided by 3 is zero, create a purple circle
                fill(179, 66, 245);
                noStroke();
                circle(x+25, y+25, 25);
            }
              else { //if the above conditions are not satisfied, print a black circle
                fill(10);
                noStroke();
                circle(x+25, y+25, 25);  
            }
        }
    }