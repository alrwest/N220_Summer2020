//Flash Cards

//when button is clicked, reveal answer associated with question

//use data attribute to list answer

//display result in a div

let element = document.getElementById("eventTest");

element.addEventListener("click", displayAnswer());

function displayAnswer(event) {
    event.target.innerHTML = "Clicked";
    event.target.style.backgroundColor = "#999999";

}