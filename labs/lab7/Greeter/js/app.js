//Greeter 

//Create an input and button
//input taken is users' name (inputReference.value)
//print hello {name} to the console (use console.log())

//creating global variables that reference back to the HTML 

let enterName = document.getElementById("enterName"); 
let givenName = document.getElementById("givenName") 

//creating function for button to perform; takes input -> stores in console -> prints to user
function getName () {
    console.log("Obtaining name..."); //logging to the console to make sure function is working
    givenName = document.getElementById("enterName").value; //taking and storing enterName value
    console.log("hello " + givenName); //logging results to the console

    document.getElementById("returnName").innerHTML = "Hello there, " + givenName + "!"; //printing the name back to the user to display hello there + input
   

    
}