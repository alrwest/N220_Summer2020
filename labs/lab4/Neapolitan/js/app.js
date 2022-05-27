//Neapolitan Ice Cream!

let neapolitanColors = ["#fffcf8", "#ffc0cb", "#7e3f12"]

function setup() {
    createCanvas(600, 300);
    noStroke();

    for (var i = 0; i < neapolitanColors.length; i++) {
        fill(neapolitanColors[i]);
        rect(0, i * 100, 600, 100);
    }
}
