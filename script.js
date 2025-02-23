let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink", 
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove", 
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "jolly", 
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp", 
    "flock", "mirth", "vapor", "wight", "xenon", "yield", "zebra", 
    "quirk", "blunt", "drift", "glint", "spurt", "chasm", "knobs", 
    "twing", "unzip", "vodka", "whelp", "zesty"
];

let word = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(word.length).fill("_");
let lives = 6;

document.getElementById("lives").innerText = lives;
updateWordDisplay();

document.addEventListener("DOMContentLoaded", setupGame);

function setupGame() {
    document.getElementById("lives").innerText = lives;
    updateWordDisplay();
}

function updateWordDisplay() {
    for (let i = 0; i < word.length; i++) {
        document.getElementById(`s-${i}`).innerText = guessedWord[i];
    }
}

function checkLetter() {
    let letter = prompt("Enter a letter:").toLowerCase();
    if (!letter || letter.length !== 1 || !/[a-z]/.test(letter)) {
        alert("Please enter a valid single letter.");
        return;
    }

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        lives--;
        document.getElementById("lives").innerText = lives;
    }

    updateWordDisplay();
    checkGameOver();
}

function checkGameOver() {
    if (!guessedWord.includes("_")) {
        setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
    } else if (lives === 0) {
        setTimeout(() => alert("Game over! The word was: " + word), 100);
    }
}
