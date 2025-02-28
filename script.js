let words = [
    "admin", "bacon", "dance", "earth", "fresh", "grape", "scarf", "zebra", "block", "snake",
    "charm", "brick", "frost", "plane", "shock", "quest", "drink", "blaze", "thumb", "crave",
    "jumps", "wreck", "faint", "glove", "harsh", "quiet", "stamp", "drown", "climb", "loved",
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp", "flock", "mirth", "vapor",
    "wight", "units", "yield", "quirk", "blunt", "drift", "glint", "spurt", "chasm", "knobs",
    "twing", "unzip", "vodka", "whelp", "zesty"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = "_ _ _ _ _";
let attempts = 5;
let guessedLetters = "";

document.getElementById("wordDisplay").innerHTML = displayedWord;
document.getElementById("attempts").innerHTML = attempts;

document.getElementById("guessButton").onclick = function () {
    let input = document.getElementById("letterInput").value.toLowerCase();
    document.getElementById("letterInput").value = "";

    if (!input.match(/[a-z]/) || input.length !== 1) {
        document.getElementById("message").innerHTML = "Enter a valid letter.";
        return;
    }

    if (guessedLetters.includes(input)) {
        document.getElementById("message").innerHTML = "You've already guessed that letter.";
        return;
    }

    guessedLetters += input;
    document.getElementById("message").innerHTML = "";

    let updatedWord = "";
    if (selectedWord[0] === input) {
        updatedWord += input + " ";
    } else {
        updatedWord += displayedWord[0] + " ";
    }

    if (selectedWord[1] === input) {
        updatedWord += input + " ";
    } else {
        updatedWord += displayedWord[2] + " ";
    }

    if (selectedWord[2] === input) {
        updatedWord += input + " ";
    } else {
        updatedWord += displayedWord[4] + " ";
    }

    if (selectedWord[3] === input) {
        updatedWord += input + " ";
    } else {
        updatedWord += displayedWord[6] + " ";
    }

    if (selectedWord[4] === input) {
        updatedWord += input;
    } else {
        updatedWord += displayedWord[8];
    }

    if (displayedWord === updatedWord) {
        attempts--;
        document.getElementById("attempts").innerHTML = attempts;
    }

    displayedWord = updatedWord;
    document.getElementById("wordDisplay").innerHTML = displayedWord;

    if (!displayedWord.includes("_")) {
        document.getElementById("message").innerHTML = "Congratulations! You won!";
        document.getElementById("guessButton").innerHTML = "Game Over";
        document.getElementById("guessButton").disabled = true;
    } else if (attempts === 0) {
        document.getElementById("message").innerHTML = `Game over! The word was "${selectedWord}".`;
        document.getElementById("guessButton").innerHTML = "Game Over";
        document.getElementById("guessButton").disabled = true;
    }
};
