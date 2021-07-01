// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

const simplePoints = { 1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], };
const vowelBonusPoints = {
  3: ['A', 'E', 'I', 'O', 'U'],
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
const blankTile = {0:[" "]}
}

let scrabbleScore = 0
let simpleScore = 0
let vowelBonusScore = 0
let score = 0

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
  userInput = input.question("Enter a word to score: ")
};



let vowelBonusScore = function (word) {
  let vowel = ['A', 'E', 'I', 'O', 'U'];
  word = word.toUpperCase()
  let score = 0
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      score += 3
    } else {
      score += 1
    }
  }
  return score
  let scrabbleScore = function (word) {
    word = word.toLowerCase();
    let score = 0
    for (let i = 0; i < word.length; i++) {
      for (const pointValue in newPointStructure) {
        if (pointValue === word[i]) {
          score += Number(newPointStructure[pointValue])
        }
      }
      return score;
    };
    const scoringAlgorithms = [{
      name: "simpleScore",
      description: "Each letter is worth 1 point",
      scoringFunction: simpleScore
    }, {
      name: "Bonus Vowels",
      description: "Vowels are 3 points, consonants are 1 point",
      scoringFunction: vowelBonusScore
    } {
      name: "Scrabble",
      description: "The traditional scoring algorithm",
      scoringFunction: scrabbleScore
    }];
    let userInput;
    function scorerPrompt() {
      console.log("Which scoring algorithm would you like to use?")
      console.log("0 - Simple: One point per character")
      console.log("1 - Vowel Bonus: Vowels are worth 3 points")
      console.log("2 - Scrabble: Uses the scrabble point system")
      scorerPromptInput = input.question("Enter 0, 1, or 2:")

      if (userInput == 0) {
        console.log(``)
      }
    };

    function transform(word) {
      let baseWord = {};
      for (i in oldPointStructure) {
        for (j = 0; j < oldPointStructure[i].length; j++{
          let newWord = oldPointStructure[i][j];
          baseWord[newWord.toLowerCase()] = Number(i);
        }
      }
      return baseWord;
    };

    let newPointStructure = transform(oldPointStructure);
    newPointStructure[" "] = 0;
    let value = Object.values(newPointStructure);
    let letter = Object.keys(newPointStructure);




    function runProgram() {
      initialPrompt();
      scorerPrompt();
      if (scorerPromptInput === 0) {
        score = simpleScrabbleScorer(userInput);
        console.log(`Score for '${userInput}': ${simpleScore}`)
      } else if (scorerPromptInput === 1) {
        score = vowelBonusScore(userInput);
        console.log(`Socre for '${userInput} : ${vowelBonusScore}`)
      } else if (scorerPromptInput === 2) {
        score = oldScrabbleScorer(userInput);
        console.log(`Score for '${userInput}' : ${scrabbleScore}`)

      } else {
        console.log("Not a valid entry")
      }
    }

    // Don't write any code below this line //
    // And don't change these or your program will not run as expected //
    module.exports = {
      initialPrompt: initialPrompt,
      transform: transform,
      oldPointStructure: oldPointStructure,
      simpleScore: simpleScore,
      vowelBonusScore: vowelBonusScore,
      scrabbleScore: scrabbleScore,
      scoringAlgorithms: scoringAlgorithms,
      newPointStructure: newPointStructure,
      runProgram: runProgram,
      scorerPrompt: scorerPrompt
    };

