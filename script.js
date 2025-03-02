let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink",
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove",
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved",
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp",
    "flock", "mirth", "vapor", "wight", "units", "yield", "zebra",
    "quirk", "blunt", "drift", "glint", "spurt", "chasm", "knobs"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = Array(selectedWord.length).fill("_");
let attempts = 6;
let guessedLetters = [];

document.getElementById("wordDisplay").innerHTML = displayedWord.join(" ");
document.getElementById("attempts").innerHTML = attempts;

document.getElementById("guessButton").addEventListener("click", function () {
    let letterInput = document.getElementById("letterInput");
    let letter = letterInput.value.toLowerCase();
    let message = document.getElementById("message");

    message.innerHTML = ""; // Clear previous message

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

    // Check and reveal letter in the word
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
        message.innerHTML = "🎉 Congratulations! You guessed the word.";
    } else if (attempts === 0) {
        message.innerHTML = "💀 Game Over! The word was: " + selectedWord;
    }

    letterInput.value = "";
    letterInput.focus();
});

function revealHangmanPart() {
    let parts = ["head", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"];
    let partToShow = parts[6 - attempts - 1];
    if (partToShow) {
        document.getElementById(partToShow).style.display = "block";
    }
}
