//Distance Calculator 

//4 inputs needed: x1 y1 x2 y2
//calculate difference of X: [x1 value] - [x2 value] = xDiff
//calculate difference of X: [y1 value] - [y2 value] = yDiff

//use equation distance = Math.sqrt(xDiff * xDiff + yDiff*yDiff)
//return the value of distance

//creating a function to calculate distance
function calculateValues() {
    //creating variables to get input values from HTML
    var x1Val = document.getElementById("x1Val").value;
    var x2Val = document.getElementById("x2Val").value;
    var y1Val = document.getElementById("y1Val").value;
    var y2Val = document.getElementById("y2Val").value;

    //creating variables to store the value of x1-x2 and y1-y2, testing to make sure it worked with console.log.
    var xDiff = (x1Val - x2Val);
    var yDiff = (y1Val - y2Val);
    console.log(xDiff, yDiff);
    //creating variable to store results in 
    //using given equation to calculate distance with new variables xDiff and yDiff
    results = Math.sqrt((xDiff * xDiff) + (yDiff *yDiff));
    console.log(results);

    //updating HTML with results to display
    document.getElementById("displayResults").innerHTML = results;

    return results //end of function, returns value
}

