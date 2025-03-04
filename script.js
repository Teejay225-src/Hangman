  
let words = [
    "charm", "brick", "frost", "plane", "shock", "quest", "drink",
    "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove",
    "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved",
    "brand", "squid", "toned", "prize", "plumb", "sword", "crimp",
    "flock", "mirth", "vapor", "yield", "zebra", "quirk", "blunt",
    "drift", "glint", "spurt", "chasm", "knobs"
];
let selectedWord = "";
 
let displayedWord = ["_", "_", "_", "_", "_"];
let lives = 6;
let guessedLetters = [];

 
function setupGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    
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

 
function updateWordDisplay() {
    document.getElementById("s-0").textContent = displayedWord[0];
    document.getElementById("s-1").textContent = displayedWord[1];
    document.getElementById("s-2").textContent = displayedWord[2];
    document.getElementById("s-3").textContent = displayedWord[3];
    document.getElementById("s-4").textContent = displayedWord[4];
}

 
function updateLives() {
    document.getElementById("lives").textContent = lives;
}

 
function hideHangmanParts() {
    document.getElementById("head").style.display = "none";
    document.getElementById("torso").style.display = "none";
    document.getElementById("arm-1").style.display = "none";
    document.getElementById("arm-2").style.display = "none";
    document.getElementById("foot-1").style.display = "none";
    document.getElementById("foot-2").style.display = "none";
}

 
function revealHangmanPart() {
   
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

 
function checkGameStatus() {
    if (displayedWord.join("") === selectedWord) {
        alert("🎉 Congratulations! You guessed the word: " + selectedWord);
        
    } else if (lives <= 0) {
        alert("💀 Game Over! The word was: " + selectedWord);
        
    }
}

 
 function checkLetter() {
   
    let letterInput = document.getElementById("letterInput");
    if (!letterInput) {
        alert("❗ No input field found in the HTML!");
        return;
    }

    let letter = letterInput.value.trim().toLowerCase();

     
    letterInput.value = "";

    
    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
        alert("❗ Please enter a valid single letter (a-z).");
        return;
    }

   
    if (guessedLetters.indexOf(letter) !== -1) {
        alert("🔁 You've already guessed that letter!");
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

     
    if (!correctGuess) {
        lives--;
        updateLives();
        revealHangmanPart();
    }

    
    updateWordDisplay();
    checkGameStatus();
}
