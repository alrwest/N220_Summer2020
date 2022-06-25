//Is the input divisble by seven?
//return a true or false statement if input number does not match

//grabbing our input
let getNum = document.getElementById("getNum");

//setting up function
function testSeven() {
//taking the value from input to test if it is divisible by 7
    getNum = document.getElementById("getNum").value;
    console.log("got it!");
    //checks to see if number is divisible by 7, factoring in the remainder w/ modulus 
        if (getNum % 7 == 0) {
        //displaying results back to user in div
        document.getElementById("results").innerHTML = "It worked!";
        //return a true statement if it works
        return true;
        }
        //displaying results back to user
        document.getElementById("results").innerHTML = "Not divisible!";
        return false;
}