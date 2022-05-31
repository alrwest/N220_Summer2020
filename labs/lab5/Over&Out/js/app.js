//Over & Out

//hover off = blue
//hover on = black

//created new variable pulled from id = square to pass into parameters of each function
var newSquare = document.getElementById("square");

//creating a function passing newSquare as parameter; creates hover on effect where hovering cursor changes square black with onmouseover
function hoverOn(newSquare) {
   newSquare = document.getElementById("square").style.backgroundColor = "#000000";
}
//creating a function passing newSquare as parameter; returns square as blue with onmouseout
function hoverAway(newSquare) {
    newSquare = document.getElementById("square").style.backgroundColor = "#0e1478";
}