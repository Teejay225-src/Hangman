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
let displayedWord = "_".repeat(selectedWord.length).split("");
let attempts = 5;

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
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            displayedWord[i] = letter;
            correctGuess = true;
        }
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
    let parts = ["head", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"];
    let part = document.getElementById(parts[5 - attempts]);
    if (part) {
        part.style.display = "block";
    }
}
