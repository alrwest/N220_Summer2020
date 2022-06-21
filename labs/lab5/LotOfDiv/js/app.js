//Lot of Div!

//set css for divs to float left
//each with a different background color
//20px x 20px 

//Created a function to generate a random color by adding two variables that contain # + hex values
    function randomColor() {
        let hexNum = "0123456789ABCDEF";
        let color = "#"
        //for loop that adds and stores value to color from hexNum that generates a hex num and rounds the value down, and returns the value
        for (i = 0; i < 3; i++) {
            color += hexNum[Math.floor(Math.random()*20)]
        }
            return color
    }

for (let i = 0; i < 100; i++) {
    //storing grid in variable random squares
    var container = document.querySelector("grid");
    var randomSquares = document.getElementById("grid");
    randomSquares.style.backgroundColor = randomColor();

    var moreSquares = document.createElement("div");
    moreSquares.id = randomSquares += i;

    container.appendChild(moreSquares);





    
}
