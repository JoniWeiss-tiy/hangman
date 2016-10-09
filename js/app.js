"use strict";

const min = 0;
const max = 99;
const maxTries = 8;
let numTriesLeft = maxTries;
let currWord = [];
let matchWordArr = [];

function getRandNum (imin,imax) {
    let floatNum = Math.random() * (imax - imin) + imin;
    return Math.floor(floatNum);
}

function getcurrWord (randomNum) {
    let currWordName = commonWords[randomNum];
    let currWordLength = currWordName.length;
    return [currWordName,currWordLength];
    // currWord is now an array with two elements:
    //     1. The actual word
    //     2. Word length
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
  console.log("Game Reset!");
    numTriesLeft = maxTries;
    let randomNum = getRandNum(min,max);
    currWord = getcurrWord(randomNum);
    let msgHeading = currWord[0] + "\n";
    let msgOutput;
    let currLetter;
    let spaceWord = '';
    for (let i = 0; i < currWord[1]; i++) {
        // currLetter = currWord[0][i];
        spaceWord += '<li><p> </p></li>';
    }
    msgOutput = spaceWord + "\n";
    // document.querySelector('h2#guess').innerHTML = msgHeading;
    document.querySelector('div#wordOutput').innerHTML = msgOutput;
    let turnsLeft = document.getElementById('turns-left');
    turnsLeft.innerHTML = turnsLeft.innerHTML = numTriesLeft;
    displayMsg();
    return currWord;
}

function getChar() {
    // Get next character input by user
    let currWordArr = currWord[0].split('');
    let spaceWord;
    let matchWord;
    let audio;
    let spaceWordArr = [];
    let alphaBet = 'abcdefghijklmnopqrstuvwxyz';
    let currChar =  document.getElementById('input-guess').value.toLowerCase();
    // Check char for valid input;
    if (alphaBet.indexOf(currChar) !== -1) {
      console.log("true");
      // Show user all previous valid choices
      let guessed = document.getElementById('guessed');
      guessed.innerHTML = guessed.innerHTML + currChar;
      // decrement number left.
      numTriesLeft = numTriesLeft - 1;
      let turnsLeft = document.getElementById('turns-left');
      turnsLeft.innerHTML = turnsLeft.innerHTML = numTriesLeft;
      // Update matchWordArr with correct guessed letters
      for (let i = 0; i <currWordArr.length; i++) {
          if (currWordArr[i] === currChar) {
            matchWordArr[i] = currChar;
          }
      }

      // Loop through matchWordArr and re-build html for
      // output area, including correctly-guessed letters
      spaceWordArr.length = 0; // empty array
      for (var i = 0 ; i < matchWordArr.length ; i++ ) {
        if (matchWordArr[i] !== undefined ) {
          console.log("currWordArr: " + currWordArr);
          for (let i = 0; i < currWordArr.length; i++) {
              if (currWordArr[i] === matchWordArr[i]) {
                // getting undefined unless initialize to '' before using.
                spaceWordArr[i] = '';
                console.log("spaceWordArr[i]: " + spaceWordArr[i]);
                spaceWordArr[i] += '<li><p>' + currWordArr[i] + '</p></li>';
              } else {
                // getting undefined unless initialize to '' before using.
                spaceWordArr[i] = '';
                spaceWordArr[i] += '<li><p></p></li>'
              }
          }
          spaceWord = spaceWordArr.join('');
          matchWord = matchWordArr.join('');
console.log("spaceWordArr: " + spaceWordArr);
console.log("spaceWord: " + spaceWord);
console.log("matchWordArr: " + matchWordArr);
console.log("matchWord: " + matchWord);
          document.querySelector('div#wordOutput').innerHTML = spaceWord;

          if (matchWord === currWord[0] ) {
            displayMsg("win");
          } else if (numTriesLeft === 0) {
            displayMsg("lose");
          }
        }
      }
    } else {
      console.log("false");
      alert(currChar + " is not a valid character! Try again...");
    }



    // Reset input field
    document.querySelector('input').value = '';
    console.log("Got " + currChar);
    // findCharInWord(currWord);
    // doesItMatch(currWord,currChar);
    return currChar;
}

window.onload = gameReset;
