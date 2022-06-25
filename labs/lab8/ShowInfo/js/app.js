//Show Info!

//display a string from an array when a button is clicked
//remember index rules

//creating a color list (array)
let colorList = ["blue", "purple", "red", "green,", "maroon"];


//setting up a function to display string to user when button is pressed
function grabString() {
    //creating a for loop to run through the length of array
    for (var i = 0; i < colorList.length; i++) {
        //setting up variable to take random index val from array
        var display = colorList.value;
        console.log("checking...");
        //displaying value back to user
       document.getElementById("results").innerHTML= display;
    }
}
