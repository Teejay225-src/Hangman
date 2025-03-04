let words = [
  "charm", "brick", "frost", "plane", "shock", "quest", "drink",
  "blaze", "thumb", "crave", "jumps", "wreck", "faint", "glove",
  "harsh", "quiet", "stamp", "drown", "climb", "fresh", "loved",
  "brand", "squid", "toned", "prize", "plumb", "sword", "crimp",
  "flock", "mirth", "vapor", "yield", "zebra", "quirk", "blunt",
  "drift", "glint", "spurt", "chasm", "knobs"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = ["_", "_", "_", "_", "_"];
let attempts = 6;
let guessedLetters = [];

const wordDisplay = document.getElementById("wordDisplay");
const attemptsDisplay = document.getElementById("attempts");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessButton");
const messageDisplay = document.getElementById("message");

wordDisplay.innerHTML = displayedWord.join(" ");
attemptsDisplay.innerHTML = attempts;

guessButton.addEventListener("click", handleGuess);

function handleGuess() {
  const letter = letterInput.value.trim().toLowerCase();

  if (letter.length !== 1 || !letter.match(/[a-z]/)) {
    messageDisplay.innerHTML = "❗ Please enter a valid letter (a-z).";
    resetInput();
    return;
  }

  if (guessedLetters.includes(letter)) {
    messageDisplay.innerHTML = "🔁 You've already guessed that letter! Try another.";
    resetInput();
    return;
  }

  guessedLetters.push(letter);

  let correctGuess = false;

  // Manually check all 5 positions
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

  wordDisplay.innerHTML = displayedWord.join(" ");

  if (!correctGuess) {
    attempts--;
    attemptsDisplay.innerHTML = attempts;
    revealHangmanPart();
  }

  checkGameStatus();
  resetInput();
}

function revealHangmanPart() {
  const parts = ["head", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"];
  const partToShow = parts[6 - attempts - 1];
  if (partToShow) {
    const partElement = document.getElementById(partToShow);
    if (partElement) {
      partElement.style.display = "block";
    }
  }
}

function checkGameStatus() {
  if (displayedWord.join("") === selectedWord) {
    messageDisplay.innerHTML = "🎉 Congratulations! You guessed the word.";
    endGame();
  } else if (attempts === 0) {
    messageDisplay.innerHTML = `💀 Game Over! The word was: <strong>${selectedWord}</strong>`;
    endGame();
  }
}

function endGame() {
  guessButton.disabled = true;
  letterInput.disabled = true;

  if (attempts === 0) {
    // Reveal all remaining parts
    const parts = ["head", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"];
    parts.forEach(part => {
      const partElement = document.getElementById(part);
      if (partElement) {
        partElement.style.display = "block";
      }
    });
  }
}

function resetInput() {
  letterInput.value = "";
  letterInput.focus();
}
