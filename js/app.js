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

function getRandNum (imin,imax) {
  let floatNum = Math.random() * (imax - imin) + imin;
  return Math.floor(floatNum);
}

function getNextWord (randomNum) {
  nextWordName = commonWords[randomNum];
  nextWordLength = nextWordName.length;
  return [nextWordName,nextWordLength];
}

function displayMsg() {
  // console.log("DisplayMsg");
  let msg = "DisplayMsg \n" + min + " & " + max;
  document.querySelector('h2#guess').innerHTML = msg;
  document.getElementById('input-guess').focus();
}

function clearGame() {
  console.log("clearGame");
  numTries = 0;
  numTriesLeft = 8;
}

function playGame (word) {
  console.log("playGame");
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
  document.querySelector('h2#dispOutput').innerHTML = msgHeading;
  document.querySelector('div#wordOutput').innerHTML = msgOutput;
}

function getChar()
{
  let currChar = document.getElementById('input-guess');
  console.log("Got " + currChar.value);
  let div = document.getElementById('wordOutput');
  div.innerHTML = div.innerHTML + currChar.value;
  document.querySelector('input').value = '';
  return currChar;
}

function onPageLoad() {
  clearGame();
  displayMsg();
  randomNum = getRandNum(min,max);
  nextWord = getNextWord(randomNum);
  playGame(nextWord);
  // console.log(randomNum + "," + nextWord);
}

// document.querySelector('button.btn-guess').onkeypress = getChar;
window.onload = onPageLoad;
