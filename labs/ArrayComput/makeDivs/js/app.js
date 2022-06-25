//Making Div's with an object array!

function makeADiv(block) {
    //creating the a new div element
    var newdiv = document.createElement("div");  

    //calling attributes from array to stylize with css properties
    newdiv.style.height = block.height;
    newdiv.style.background= block.color;
    newdiv.style.width = block.width;

    document.body.appendChild(newdiv);
    //displaying back to user with innerHTML
    console.log("Success");

    newdiv.innerHTML = "Success! Made a Div";
  }
  
  //creating a function to loop through array
  function objectArray() {
  let objects = [
      { color: "#FF0000", height: 100, width: 300 },
      { color: "#FFFF00", height: 200, width: 200 },
      { color: "#ff0000", height: 300, width: 100 },
  ];
  
  //will make three divs, for the three objects in the array
  for(i=0;i<objects.length;i++)
      makeADiv(objects[i]);
  
  }

