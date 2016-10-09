"use strict";

const min = 0;
const max = 99;
let randomNum;
let nextWord = [];
let nextWordName;
let nextWordLength;
let numTries = 0;
let numTriesLeft = 0;
let currChar = '';
let charsMatched = [];

function getRandNum (imin,imax) {
  let floatNum = Math.random() * (imax - imin) + imin;
  return Math.floor(floatNum);
}

function getNextWord (randomNum) {
  nextWordName = commonWords[randomNum];
  nextWordLength = nextWordName.length;
  return [nextWordName,nextWordLength];
}

function displayMsg(message) {
  // console.log("DisplayMsg");
  let msg;
  switch (message) {
    case "win":
      msg = "Congratulations! You got it right!!!";
      break;
    case "lose":
      msg = "Sorry... Try again?";
      break;
    default:
      msg = "Guess this word:";
  }
  document.querySelector('h2#dispOutput').innerHTML = msg;
  document.getElementById('input-guess').focus();
}

function gameReset() {
  displayMsg();
  numTries = 0;
  numTriesLeft = 8;
  charsMatched = [];
  randomNum = getRandNum(min,max);
  nextWord = getNextWord(randomNum);
  console.log("gameReset()");
}



function findCharInWord(nextWord) {
  let indices = [];
  for(let i=0; i<nextWord[1];i++) {
      if (nextWord[0] === "s") indices.push(i+1);
  }
  console.log(indices);
}

// Got the word and word-length
// initialize output LI's
// for each char entered - do:
  // check if matches 1 or more letters in word
    // if it does:
      // get char index values
      // decrement numTriesLeft
      // update charsMatched with matching letters
      // update LI's with matching letters
      // compare numTries with maxTries - If matched:
        // evaluate win or lose
        // call displayMsg(win) or displayMsg(lose)

function playGame (word) {
  console.log("playGame()");
  let msgHeading = '';
  let msgOutput = '';
  let numSpaces = word[1];
  let spaceWord = '';
  for (let i = 0; i < numSpaces; i++) {
    spaceWord += '<li></li>';
  }
  msgHeading = word[0] + "\n";
  msgOutput = spaceWord + "\n";
  console.log(word + " - " + spaceWord);
  document.querySelector('h2#guess').innerHTML = msgHeading;
  document.querySelector('div#wordOutput').innerHTML = msgOutput;
}

function getChar() {
  currChar = document.getElementById('input-guess');
  let div = document.getElementById('wordOutput');
  div.innerHTML = div.innerHTML + currChar.value;
  document.querySelector('input').value = '';
  console.log("Got " + currChar.value);
  // findCharInWord(nextWord);
  return currChar;
}

function onPageLoad() {
  gameReset();
  playGame(nextWord);
  // console.log(randomNum + "," + nextWord);
}

window.onload = onPageLoad;
