//Changing Styles!


//creating our function, passing through each block as a parameter to only use one function to make the program change each block individually

function changeStyle(blockOne, blockTwo, blockThree) {
    //we can use CSS properties to create functionality in Javascript like adjusting color and width.
    document.getElementById("blockOne").style.backgroundColor = "#071466";
    document.getElementById("blockOne").style.width = "200px";  
}