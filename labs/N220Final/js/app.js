
//this event loads up our page
//I learned this from my resources
document.addEventListener("DOMContentLoaded", () => {
console.log("loading...");

//created an object array of cards to store the faced or flipped cards 

//two cards for each pair; 8 pairs = 16 cards total for 4 x 4 grid.
  let cardArray = [
    {
      cardFace: "earth",
      image: "images/earth-card.jpeg"
    },

    {
      cardFace: "earth",
      image: "images/earth-card.jpeg"
    },

    {
      cardFace: "jupiter",
      image: "images/jupiter-card.jpeg"
    },

    {
      cardFace: "jupiter",
      image: "images/jupiter-card.jpeg"
    },

    {
      cardFace: "mars",
      image: "images/mars-card.jpeg"
    },

    {
      cardFace: "mars",
      image: "images/mars-card.jpeg"
    },

    {
      cardFace: "mercury",
      image: "images/mercury-card.jpeg"
    },

    {
      cardFace: "mercury",
      image: "images/mercury-card.jpeg"
    },

    {
      cardFace: "neptune",
      image: "images/neptune-card.jpeg"
    },

    {
      cardFace: "neptune",
      image: "images/neptune-card.jpeg"
    },

    {
      cardFace: "saturn",
      image: "images/saturn-card.jpeg"
    },

    {
      cardFace: "saturn",
      image: "images/saturn-card.jpeg"
    },

    {
      cardFace: "uranus",
      image: "images/uranus-card.jpeg"
    },

    {
      cardFace: "uranus",
      image: "images/uranus-card.jpeg"
    },

    {
      cardFace: "venus",
      image: "images/venus-card.jpeg"
    },

    {
      cardFace: "venus",
      image: "images/venus-card.jpeg"
    }
  ]
  //setting up empty arrays to store clicked cards to check for a match, and another to store the matches
  let clickedCards = [];
  let matches = [];
  let cardGrid = document.getElementsByClassName("card");

//intiating the game
function startGame() {
    console.log("starting game...");
    //necessary 'for loop' to run through the card array
    for (let i =0; i <cardArray.length; i++) {
      //setting up a variable to grab card div from HTML
      var card = document.getElementsByClassName("card");
      //creating id with setAttribute and looping
      card.setAttribute("data-id", i);
      //add an event listener to check to see if card is clicked, then perform flipCard function
      card.addEventListener("click", flipCard);
      cardGrid.appendChild(card);
   }
}

//creating the flip card function
function flipCard() {
  console.log("flipping...");
  //creating constructor object to get the card id with data attribute
  var faceId = this.getAttribute("data-id");
  //function to grab cardFace value and match it with the card's id when clicked
  clickedCards.push(cardArray[faceId].cardFace);
  //putting chosen/clicked card into empty array called clicked cards
  clickedCards.push(faceId);
  //conditional that will check the clicked cards array length to to initalize looking for a match after two seconds
  if (clickedCards.length === 2) {
    setTimeout(checkMatch, 2000);
  }
}

//function that will checked clicked cards for a match
function checkMatch() {
  console.log("Checking for matches...");
  var card = document.querySelectorAll("image");

  //checking the array value
  //if a match is true, the css property display will turn to none, removing the cards
  var checkOne = clickedCards[0];
  var checkTwo = clickedCards[1];
  if (clickedCards[0] === clickedCards[1]) {
    card = document.getElementsByClassName("card").style.display = "none";
    //else statement to reset it back to original card 
  } else {
      card[checkOne].setAttribute("src","images/galaxy-card-back.jpeg");
      card[checkTwo].setAttribute("src","images/galaxy-card-back.jpeg");
  }
  //emptying the stored arrays
  clickedCards = [];
  matches = [];
}
//creating a function to reset the game
replayGame() {
    cardArray.sort(() => Math.random());
}

})