let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink", 
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove", 
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved", 
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp", 
    "flock", "mirth", "vapor", "wight", "units", "yield", "zebra", 
    "quirk", "blunt", "drift", "glint", "spurt", "chasm", "knobs", 
    "twing", "unzip", "vodka", "whelp", "zesty"
];

let word = "";
let guessedWord = [];
let lives = 6;
let guessedLetters = new Set();
const bodyParts = ["head", "torso", "arm-1", "arm-2", "foot-1", "foot-2"];

function setupGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(word.length).fill("_");
    lives = 6;
    guessedLetters.clear();

    document.getElementById("lives").innerHTML = lives;
    updateWordDisplay();

    // Hide all body parts
    bodyParts.forEach(part => {
        document.getElementById(part).style.display = "none";  
    });

    // Reset input
    document.getElementById("letter-input").value = "";
}

function updateWordDisplay() {
    document.getElementById("word-display").innerHTML = guessedWord.map(letter => `<span class="letter">${letter}</span>`).join("");
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
        guessedWord = guessedWord.map((char, index) => (word[index] === letter ? letter : char));
    } else {
        lives--;
        document.getElementById("lives").innerHTML = lives;
        showNextBodyPart();
    }

    updateWordDisplay();
    checkGameOver();
}

function showNextBodyPart() {
    let index = 6 - lives - 1;  
    if (index >= 0 && index < bodyParts.length) {
        document.getElementById(bodyParts[index]).style.display = "block";
    }
}

function checkGameOver() {
    if (!guessedWord.includes("_")) {
        setTimeout(() => {
            alert(`🎉 Congratulations! You guessed the word: ${word}`);
            setupGame();
        }, 100);
    } else if (lives === 0) {
        setTimeout(() => {
            alert(`❌ Game over! The word was: ${word}`);
            setupGame();
        }, 100);
    }
}

// Enable button only if a valid letter is entered
function validateInput() {
    let letter = document.getElementById("letter-input").value.toLowerCase();
    document.querySelector("button").disabled = !(letter.length === 1 && /[a-z]/.test(letter));
}
 

