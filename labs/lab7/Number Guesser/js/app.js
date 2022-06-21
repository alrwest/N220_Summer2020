//Number Guesser

//use input tag to get a number from user
//guessing condition: number should be between 1-20
//give too high, too low or equal to hints

//remove text in input box when button is pressed
let guessCount = 0;
function numberGuess () {
    var getNum = document.getElementById("getNum").value; //calling the value from getNum from index.html
    console.log(getNum); //testing 
    var correctGuess = Math.floor(Math.random()*20) + 1; //using math.random to generate a range from 1-20
    
    if (getNum == correctGuess) { //if guess is correct, display message
        console.log("Correct")
        document.getElementById("results").innerHTML = "Correct!"

        guessCount++; //adds on to guessCount's value to keep track of guesses
        document.getElementById("guessCount").innerHTML = guessCount; //displaying guesses

    } else if (getNum > correctGuess) { //if getNum is larger than the answer, display message
        console.log("too high");
        document.getElementById("results").innerHTML = "Too High. Try again"

        guessCount++;
        document.getElementById("guessCount").innerHTML = guessCount;

    } else if (getNum < correctGuess) { //if getNum is smaller than the answer, display message
        console.log("too low");
        document.getElementById("results").innerHTML = "Too Low. Try again"
    
        guessCount++;
        document.getElementById("guessCount").innerHTML = guessCount;
    } else {
        console.log("Error"); //prints error if above conditions aren't met
    }

    var getNum = document.getElementById("getNum").value = ""; //resets getNum value to zero in input box
  }
