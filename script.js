// Global Variables
let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink",
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove",
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved",
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp",
    "flock", "mirth", "vapor", "yield", "zebra", "quirk", "blunt",
    "drift", "glint", "spurt", "chasm", "knobs"
];
let selectedWord = "";
// We assume a five-letter word so we use an array of 5 underscores.
let displayedWord = ["_", "_", "_", "_", "_"];
let lives = 6;
let guessedLetters = [];

// Called when the page loads
function setupGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    // Reset the displayed word manually for 5 letters.
    displayedWord[0] = "_";
    displayedWord[1] = "_";
    displayedWord[2] = "_";
    displayedWord[3] = "_";
    displayedWord[4] = "_";
    lives = 6;
    guessedLetters = [];
    updateWordDisplay();
    updateLives();
    hideHangmanParts();
}

// Updates the word display (elements with IDs s-0 to s-4)
function updateWordDisplay() {
    document.getElementById("s-0").textContent = displayedWord[0];
    document.getElementById("s-1").textContent = displayedWord[1];
    document.getElementById("s-2").textContent = displayedWord[2];
    document.getElementById("s-3").textContent = displayedWord[3];
    document.getElementById("s-4").textContent = displayedWord[4];
}

// Updates the lives display element
function updateLives() {
    document.getElementById("lives").textContent = lives;
}

// Hides all hangman parts at game start
function hideHangmanParts() {
    document.getElementById("head").style.display = "none";
    document.getElementById("torso").style.display = "none";
    document.getElementById("arm-1").style.display = "none";
    document.getElementById("arm-2").style.display = "none";
    document.getElementById("foot-1").style.display = "none";
    document.getElementById("foot-2").style.display = "none";
}

// Reveals a hangman part based on the number of wrong guesses
function revealHangmanPart() {
    // wrongCount = total parts revealed so far = 6 - lives
    let wrongCount = 6 - lives;
    if (wrongCount === 1) {
        document.getElementById("head").style.display = "block";
    } else if (wrongCount === 2) {
        document.getElementById("torso").style.display = "block";
    } else if (wrongCount === 3) {
        document.getElementById("arm-1").style.display = "block";
    } else if (wrongCount === 4) {
        document.getElementById("arm-2").style.display = "block";
    } else if (wrongCount === 5) {
        document.getElementById("foot-1").style.display = "block";
    } else if (wrongCount === 6) {
        document.getElementById("foot-2").style.display = "block";
    }
}

// Checks the game status and alerts the user if they've won or lost
function checkGameStatus() {
    if (displayedWord.join("") === selectedWord) {
        alert("🎉 Congratulations! You guessed the word: " + selectedWord);
        setupGame();
    } else if (lives <= 0) {
        alert("💀 Game Over! The word was: " + selectedWord);
        setupGame();
    }
}

// Called when the user clicks the "Enter a letter" button
 function checkLetter() {
    // 1. Get the letter from the input field instead of using prompt()
    let letterInput = document.getElementById("letterInput");
    if (!letterInput) {
        alert("❗ No input field found in the HTML!");
        return;
    }

    let letter = letterInput.value.trim().toLowerCase();

    // 2. Clear the input field after reading
    letterInput.value = "";

    // 3. Validate the letter
    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
        alert("❗ Please enter a valid single letter (a-z).");
        return;
    }

    // 4. Check if the letter was already guessed
    if (guessedLetters.indexOf(letter) !== -1) {
        alert("🔁 You've already guessed that letter!");
        return;
    }

    guessedLetters.push(letter);

    let correctGuess = false;

    // 5. Manually check each position (assuming a 5-letter word)
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

    // 6. If it's a wrong guess, decrement lives & reveal a hangman part
    if (!correctGuess) {
        lives--;
        updateLives();
        revealHangmanPart();
    }

    // 7. Update the displayed word and check if the game is won or lost
    updateWordDisplay();
    checkGameStatus();
}
