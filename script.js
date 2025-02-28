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
let displayedWord = [];
let attempts = 6;
let guessedLetters = [];

if (selectedWord.length === 5) {
    displayedWord = ["_", "_", "_", "_", "_"];
} else if (selectedWord.length === 6) {
    displayedWord = ["_", "_", "_", "_", "_", "_"];
} else if (selectedWord.length === 7) {
    displayedWord = ["_", "_", "_", "_", "_", "_", "_"];
} else if (selectedWord.length === 8) {
    displayedWord = ["_", "_", "_", "_", "_", "_", "_", "_"];
} else {
    displayedWord = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
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

    if (guessedLetters.includes(letter)) {
        message.innerHTML = "You already guessed that letter! Try another.";
        return;
    }

    guessedLetters.push(letter);
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
        message.innerHTML = "Congratulations! You guessed the word.";
        disableGame();
    } else if (attempts === 0) {
        message.innerHTML = "Game Over! The word was " + selectedWord;
        disableGame();
    }

    document.getElementById("letterInput").value = "";
});

function revealHangmanPart() {
    if (attempts === 5) {
        document.getElementById("head").style.display = "block";
    }
    if (attempts === 4) {
        document.getElementById("torso").style.display = "block";
    }
    if (attempts === 3) {
        document.getElementById("leftArm").style.display = "block";
    }
    if (attempts === 2) {
        document.getElementById("rightArm").style.display = "block";
    }
    if (attempts === 1) {
        document.getElementById("leftLeg").style.display = "block";
    }
    if (attempts === 0) {
        document.getElementById("rightLeg").style.display = "block";
    }
}

function disableGame() {
    document.getElementById("guessButton").disabled = true;
    document.getElementById("letterInput").disabled = true;
}
