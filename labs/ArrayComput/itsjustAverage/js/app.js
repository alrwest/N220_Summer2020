//It's just average!

//creating app that splits a list of inputed comma separated numbers into an array

//calculates average of array + display the average & sum
//displays average & sum
//removes text after input

//getting the input from the HTML DOC
let getSum = document.getElementById("getSum");
//declaring an empty array for user input
let numArray = [];

//creating the function to calc mean/average of input
function calcMean() {
    //creating a variable to get a value from user input, then separating each value in numArray by a ","
    var splitSum = getSum.value;
    let numArray = splitSum.split(",");
    //setting up a sum variable at 0 for our loop
    let sum = 0;

    //loop to add up all of the values in numArray for the sum
    for (let i = 0; i <numArray.length; i++) {
        sum += Number(numArray[i]);
    }
    //log sum to console to test loop; if it works it will display to div displaySum
    console.log(sum);
    document.getElementById("displaySum").innerHTML = sum;

    //counting the strings in array to get our divisor
    var numCount = numArray.length;

    //formula for calculating mean, log to console and display it in div
    var average = sum / numCount; 
    console.log(average)
    document.getElementById("displayAverage").innerHTML = average;

    //reseting input value
    document.getElementById("getSum").value = " ";
}
