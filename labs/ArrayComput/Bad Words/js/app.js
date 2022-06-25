//Bad Word Detector!
//take in input from a user
//split string via spaces i.e [.split(" ")]
//if bad words ("clear", "water", "tires") are detected, add one to a tally div; console.log(tally)

//input
//Enter bad words here: 

//output: 
//bad words detected: {badwords}
//How Many Were Found?: {totalTally}

//clear input text 
//document.getElementById("getWords").value = " ";

let getWords = document.getElementById("getWords");
let wordsList = ["water", "clear", "tires"];
let inputList = [];

//function wordDetector() {
    getWords = document.getElementById("getWords").value;
    console.log(getWords);

    let wordsList = getWords.split(" ");

    for (i = 0; i < inputList.length; i++) {
        inputList.push(splitWords);
        if (splitWords === wordsList[i]) {
         //add val to wordsFound
         let detected = wordsList[i];
         detected.innerHTML += inputList[i].value;
         document.getElementById("wordsFound").innerHTML = "detected";
         //add tally to word count
         var tallyCount = detected.length;
         console.log(tallyCount);

         document.getElementById("tally").innerHTML = tallyCount;
        } else {
   //         console.log("No bad words detected!");
   //     }
  //  }
    
//}