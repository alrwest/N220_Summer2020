//Peak Pixels

// Styling: making a 100px by 100px green square in JavaScript //
//document.getElementById grabs the id name from HTML and puts back the action, style, etc. //

document.getElementById("ourSquare").style.backgroundColor = "#097969";
document.getElementById("ourSquare").style.width = "100px";
document.getElementById("ourSquare").style.height = "100px";


// this function increases the size of the square  //
function increaseSize () {
    //declaring variable to communicate with innerHTML 
    let greenSquare = document.getElementById("ourSquare");

//records the original 100px by 100 px square's width
//variable to record width/height

    var initialSquare = greenSquare.clientWidth;
    var initialSquare = greenSquare.clientHeight;

//loop that allows clicking the square to increase width and height by 10%

    //if initial square is equal to 0, square will be blue, otherwise it will increase 10%
    if (initialSquare == 0) {
        greenSquare.style.backgroundColor = "#0000FF";
    } else {
        //Changes the width and height by 10% 
        greenSquare.style.width = (initialSquare * 1.1) + "px";
        greenSquare.style.height = (initialSquare * 1.1) + "px";
    }
}
