var winCounter = 0;
var lossCounter = 0;
var lives = 9;
var guessList = [];
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var updateWinCounter = document.getElementById("wins");
var updateLossCounter = document.getElementById("losses");
var updateLivesCounter = document.getElementById("livesLeft");
var updateGuessList = document.getElementById("guessesSoFar");
var updateWinStatement = document.getElementById("winStatement");
var updateLossStatement = document.getElementById("lossStatement");
var computerChoice = Math.floor(Math.random() * 26);
var computerGuess = letterOptions[computerChoice];

function resetGame() {
  lives = 9;
  updateLivesCounter.textContent = lives;
  guessList = [];
  updateGuessList.textContent = guessList;
  computerChoice = Math.floor(Math.random() * 26);
  computerGuess = letterOptions[computerChoice];
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(computerGuess);
  if (userGuess !== computerGuess) {
    if (lives > 0) {
      lives -= 1;
      guessList.push(userGuess);
      updateLivesCounter.textContent = lives;
      updateGuessList.innerHTML = guessList;
    } if (lives === 0) {
      lossCounter += 1;
      updateLossCounter.textContent = lossCounter;
      resetGame();
    }
  } else {
    winCounter += 1;
    updateWinCounter.textContent = winCounter;
    resetGame();
  }
}