let whatWords = document.getElementById("whatWords");
let getWords = document.getElementById("getWords");

let badWords = ["clear", "water", "tires"];


function wordDetector() {
    let grabWord = getWords.value;
     
    for (let i = 0; i < badWords.length; i++) {

        var splitWords = getWords.value;
        let badWords = splitWords.split(" ");
        console.log("split");

        if (badWords[i].toLowerCase() == splitWords.toLowerCase()){
            console.log(badWords[i]);
            
            let givenWords = document.createElement("div");
            givenWords.innerHTML = badWords[i].value;
            getWords.appendChild(givenWords);

            whatWords.innerHTML = badWords[i];
            
        }
    }
} 