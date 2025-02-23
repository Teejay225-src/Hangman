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
let guessedLetters = new Set();

document.addEventListener("DOMContentLoaded", setupGame);

function setupGame() {
    document.getElementById("lives").innerText = lives;
    let wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = guessedWord.map(letter => `<span class="letter">${letter}</span>`).join("");

    // Hide all body parts at the start
    let bodyParts = ["head", "torso", "arm-1", "arm-2", "foot-1", "foot-2"];
    bodyParts.forEach(part => {
        document.getElementById(part).style.display = "none";
    });
}

function updateWordDisplay() {
    let wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = guessedWord.map(letter => `<span class="letter">${letter}</span>`).join("");
}

function checkLetter() {
    let inputField = document.getElementById("letter-input");
    let letter = inputField.value.toLowerCase();
    inputField.value = "";

    if (!letter || letter.length !== 1 || !/[a-z]/.test(letter) || guessedLetters.has(letter)) {
        alert("Please enter a valid, new letter.");
        return;
    }

    guessedLetters.add(letter);

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        lives--;
        document.getElementById("lives").innerText = lives;
        showNextBodyPart();
    }

    updateWordDisplay();
    checkGameOver();
}

function showNextBodyPart() {
    let bodyParts = ["head", "torso", "arm-1", "arm-2", "foot-1", "foot-2"];
    let partsToShow = 6 - lives;  // Number of parts to show based on lost lives

    if (partsToShow > 0 && partsToShow <= bodyParts.length) {
        document.getElementById(bodyParts[partsToShow - 1]).style.display = "block";
    }
}

function checkGameOver() {
    if (!guessedWord.includes("_")) {
        setTimeout(() => {
            alert(`🎉 Congratulations! You guessed the word: ${word}`);
            resetGame();
        }, 100);
    } else if (lives === 0) {
        setTimeout(() => {
            alert(`❌ Game over! The word was: ${word}`);
            resetGame();
        }, 100);
    }
}

function resetGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(word.length).fill("_");
    lives = 6;
    guessedLetters.clear();
    document.getElementById("lives").innerText = lives;
    updateWordDisplay();
    setupGame(); // Re-hide body parts
}
