var womenHistory = [
    "Harriet", "Maya", "Michelle", "Emilia", "Angela"
]
var yourChoice = "";
var yourGuesses = [];
var remainingGuesses = 0;
var youWin = 0;
var wins = 0;
var losses = 0;
var numSpaces = 0;
var startGame = false;

function randomWoman() {
    var randomWoman = Math.floor(Math.random() * 123);

    yourChoice = womenHistory[randomWoman];

    return yourChoice;
}

function startGame() {

    remainingGuesses = 8;
    yourGuesses = [];
    yourChoice = randomWoman();
    youWin = 0;
    numSpaces = 0;
    outputBlanks = "";
}

for (i = 0; i < (yourChoice.length); i++) {

    if (yourChoice.charAt(i) === " ") {

        numSpaces++;


    }
}

document.getElementById("display-blanks").innerHTML = outputBlanks;

document.getElementById("remaining-guesses").innerHTML = remainingGuesses;

document.getElementById("your-guesses").innerHTML = yourGuesses;



function youWin() {

    if (youWin == calculateNameLength(yourChoice)) {
        wins++;

        startGame = false;

        document.getElementById("display-blanks").innerHTML = "Click to play again";
        document.getElementById("wins").innerHTML = wins;

        alert("Great job!" + yourChoice + "would be proud!");

        return true;
    }
    else {
        return false;
    }
}

function youLose() {

    if (
        remainingGuesses == 0
    ) {
        losses++;

        startGame = false;

        document.getElementById("display-blanks").innerHTML = "Click to play again";

        document.getElementById("losses").innerHTML = losses;

        alert("Game over." + yourChoice + "forgives, we do not!");

        return true;
    } else {
        return false;
    }
}

console.log("Start Game" + startGame);

var guess = true;
document.onkeyup = function (guess) {

    if (startGame() == false) {
        if (startGame() == true) {
            startGame = true;

            console.log("Game has started:" + startGame);
        }
        else {
            console.log("Error");
        }
    }

    else {
        yourGuesses = guess.key;
    }
}

