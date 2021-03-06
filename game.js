//require the Word constructor from word.js
var Word = require("./word.js");

//create a constructor named Game
var Round = function(words, number) {
  
  var word; 
  var randomIndex;

  //property for an array of words
  this.words = words;

  //property for total # of rounds
  this.totalRounds = words.length;

  //property for the round
  this.roundNumber = 0;

  //property to set the number of guesses per round
  this.guessesRemaining = number;

  //property to hold guessed letters
  this.guessedLetters = [];

  //function to increment round
  this.incrementRound = function() {
    this.roundNumber ++;

    //reset guessed letter to []
    this.guessedLetters = [];
  };

  //assign a word to be guessed
  this.currentWord = "";//this.getRandomWord();

  //remove a word from the words array
  this.removeWord = function() {

    //remove the word which is found in the index provided
    this.words.splice(randomIndex, 1);

    //call the increment round method
    this.incrementRound();
  };

  //method to pick a random word
  this.getRandomWord = function() {
    //get the word's length
    var length = this.words.length;

    //get a random index
    randomIndex = Math.floor(Math.random() * length);

    //create a new instance of Word constructor
    word = new Word(this.words[randomIndex]);

    //assign the word to be guessed
    this.currentWord = this.words[randomIndex];

    //remove the word from the words array
    this.removeWord(randomIndex);

    //return the random word picked
    return this.words[randomIndex];
  };

  //persisted display word
  this.displayWord = "";

  //method that gets the display word
  this.getDisplayWord = function(input) {
    this.displayWord = word.getDisplayWord(input);

    return this.displayWord;
  }

}

module.exports = Round;









