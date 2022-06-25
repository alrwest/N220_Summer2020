//Color Mixer!
//Create an application 

//div block -> #00000

// ->  R [+1] .[+5] [+10] ->  r g b (5 0 0) 
// ->  G [+1]  [+5] .[+10] ->  r g b (0 10 0) } Add Values
// ->  B .[+1] [+5] [+10] ->  r g b (0 0 1) 

//setting global variables for rgb values, starting at 0
let red = 0;
let green = 0; 
let blue = 0;

//linking rgb value display to user with in operators
document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;

//most button functions are the same, just adjusted for color names
//adding one,5,or 10 to itself, then updating the color block on html [when clicked]

function redPlusone() {
    //getting those global variables, adding val of button when clicked.
    red += 1;
    //updating div block on HTML Doc
    document.getElementById("colorBlock").style.backgroundColor = "rgb("+red","+green","+blue");

    //updating rgb value
    document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;
}

function redPlusfive() {
    //getting those global variables, adding val of button when clicked.
    red += 5;
    //updating div block on HTML Doc
    document.getElementById("colorBlock").style.backgroundColor = "rgb("+red","+green","+blue");

    //updating rgb value
    document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;
}

function redPlusten() {
    //getting those global variables, adding val of button when clicked.
    red += 10;
    //updating div block on HTML Doc
    document.getElementById("colorBlock").style.backgroundColor = "rgb("+red","+green","+blue");
    //updating rgb value
    document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;
}

function greenPlusone() {

       //getting those global variables, adding val of button when clicked.
       green += 1;
       //updating div block on HTML Doc
       document.getElementById("colorBlock").style.backgroundColor = "rgb("+red","+green","+blue");
   
       //updating rgb value
       document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;

}

function bluePlusone() {

       //getting those global variables, adding val of button when clicked.
       blue += 1;
       //updating div block on HTML Doc
       document.getElementById("colorBlock").style.backgroundColor = "rgb("red"+"+green"+"blue");
   
       //updating rgb value
       document.getElementById("value").innerHTML = `${red}, ${green}, ${blue}`;
}