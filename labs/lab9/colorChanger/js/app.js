//Color Change!

//creating a new variable that gets element by class "block", not id. class is preferable here because we are selecting three similar items, that all need a color change. ID will be used to give block their unique color. //
var newColor = document.getElementsByClassName('block'); 
var y; 

//creating a for loop containing the event listener that will run the function colorAdjust when clicked
for (y = 0; y < newColor.length; y++) {
        newColor[y].addEventListener('click', colorAdjust)  
        console.log("listening...");
    }
//creating function colorAdjust() with object constructor functions to change individual color of the elements from the same class with the data attribute 'data-color'
function colorAdjust() {
    console.log("Changing color...");
    this.style.backgroundColor = this.getAttribute('data-color');
}