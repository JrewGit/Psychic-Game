var winCounter = 0;
var lossCounter = 0;
var guessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = Math.floor(Math.random() * 26);
var guessesLeft = 9;
var computerGuess = guessOptions[computerChoice];
var guessList = [];

var wins = document.getElementById("winner");
wins.innerHTML = "Wins: " + winCounter;

var losses = document.getElementById("loser");
losses.innerHTML = "Losses: " + lossCounter;

var guesses = document.getElementById("guessesSoFar");
guesses.innerHTML = "Your guesses so far: " + guessList;

var livesLeft = document.getElementById("lives");
livesLeft.innerHTML = "Guesses Left: " + guessesLeft;

document.onkeyup = function() {

    
    userGuess = event.key;
    // console.log(userGuess)
    // console.log(userGuess);
    // console.log(computerGuess);
    wins++;
}



// console.log(guessOptions[computerGuess]);