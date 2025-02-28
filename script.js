let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink", 
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove", 
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved", 
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp", 
    "flock", "mirth", "vapor", "wight", "units", "yield", "zebra", 
    "quirk", "blunt", "drift", "glint", "spurt", "chasm", "knobs", 
    "twing", "unzip", "vodka", "whelp", "zesty"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = ["_", "_", "_", "_", "_"];
let attempts = 5;

if (selectedWord.length === 6) {
    displayedWord.push("_");
}
if (selectedWord.length === 7) {
    displayedWord.push("_", "_");
}
if (selectedWord.length === 8) {
    displayedWord.push("_", "_", "_");
}
if (selectedWord.length === 9) {
    displayedWord.push("_", "_", "_", "_");
}

document.getElementById("wordDisplay").innerHTML = displayedWord.join(" ");
document.getElementById("attempts").innerHTML = attempts;

document.getElementById("guessButton").addEventListener("click", function() {
    let letter = document.getElementById("letterInput").value.toLowerCase();
    let message = document.getElementById("message");

    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
        message.innerHTML = "Please enter a valid letter.";
        return;
    }

    let correctGuess = false;

    if (selectedWord[0] === letter) {
        displayedWord[0] = letter;
        correctGuess = true;
    }
    if (selectedWord[1] === letter) {
        displayedWord[1] = letter;
        correctGuess = true;
    }
    if (selectedWord[2] === letter) {
        displayedWord[2] = letter;
        correctGuess = true;
    }
    if (selectedWord[3] === letter) {
        displayedWord[3] = letter;
        correctGuess = true;
    }
    if (selectedWord[4] === letter) {
        displayedWord[4] = letter;
        correctGuess = true;
    }
    if (selectedWord.length > 5 && selectedWord[5] === letter) {
        displayedWord[5] = letter;
        correctGuess = true;
    }
    if (selectedWord.length > 6 && selectedWord[6] === letter) {
        displayedWord[6] = letter;
        correctGuess = true;
    }
    if (selectedWord.length > 7 && selectedWord[7] === letter) {
        displayedWord[7] = letter;
        correctGuess = true;
    }
    if (selectedWord.length > 8 && selectedWord[8] === letter) {
        displayedWord[8] = letter;
        correctGuess = true;
    }

    document.getElementById("wordDisplay").innerHTML = displayedWord.join(" ");

    if (!correctGuess) {
        attempts--;
        document.getElementById("attempts").innerHTML = attempts;
        revealHangmanPart();
    }

    if (displayedWord.join("") === selectedWord) {
        message.innerHTML = "You won!";
    } else if (attempts === 0) {
        message.innerHTML = "Game Over! The word was " + selectedWord;
    }

    document.getElementById("letterInput").value = "";
});

function revealHangmanPart() {
    if (attempts === 4) {
        document.getElementById("head").style.display = "block";
    }
    if (attempts === 3) {
        document.getElementById("torso").style.display = "block";
    }
    if (attempts === 2) {
        document.getElementById("leftArm").style.display = "block";
    }
    if (attempts === 1) {
        document.getElementById("rightArm").style.display = "block";
    }
    if (attempts === 0) {
        document.getElementById("leftLeg").style.display = "block";
        document.getElementById("rightLeg").style.display = "block";
    }
}

