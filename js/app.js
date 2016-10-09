"use strict";

const min = 0;
const max = 99;
const maxTries = 8;
let numTries = 0;
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
    console.log(currWord + " - " + spaceWord);
    document.querySelector('h2#guess').innerHTML = msgHeading;
    document.querySelector('div#wordOutput').innerHTML = msgOutput;
    displayMsg();
    return currWord;
}

function getChar() {
    // Get next character input by user
    let currWordArr = currWord[0].split('');
    let spaceWord;
    let spaceWordArr = [];
    let alphaBet = 'abcdefghijklmnopqrstuvwxyz';
    let currChar =  document.getElementById('input-guess').value.toLowerCase();
    // Check char for valid input;
    if (alphaBet.indexOf(currChar) !== -1) {
      console.log("true");
      // Show user all previous valid choices
      let div = document.getElementById('guessed');
      div.innerHTML = div.innerHTML + currChar;

      for (let i = 0; i <currWordArr.length; i++) {
          if (currWordArr[i] === currChar) {
            matchWordArr[i] = currChar;
          }
      }
      // console.log("matchWordArr : ");
      // console.log(matchWordArr);
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
              // currLetter = currWord[0][i];
              // spaceWord += '<li class="hidden"><p>' + currLetter + '</p></li>';
          }
          spaceWord = spaceWordArr.join(',');
          document.querySelector('div#wordOutput').innerHTML = spaceWord;
          if (matchWordArr.join(',').length === currWordArr.join(',').length ) {
            console.log()
          }
          if ( spaceWord === currWord) {
            displayMsg(win);
          }
        }
      }
      // var el = document.getElementsByClassName("hidden").ParentNode.childElementCount;
      // console.log("El count " + el);
      // for (var i = 0; i < matchWordArr.length ; i++) {

        // document.getElementById("hidden").children[i].style.display("inherit");
        // switch (i) {
        //   case 0:
        //     document.getElementsByClassName("hidden").children[0].style.display("inherit");
        //     break;
        //   case 1:
        //     document.getElementsByClassName("hidden").children[1].style.display("inherit");
        //     break;
        //   case 2:
        //     document.getElementsByClassName("hidden").children[2].style.display("inherit");
        //     break;
        //   case 3:
        //     document.getElementsByClassName("hidden").children[3].style.display("inherit");
        //     break;
        //   case 4:
        //
        //     break;
        //   case 5:
        //
        //     break;
        //   case 6:
        //
        //     break;
        //   case 7:
        //
        //     break;
        //   case 8:
        //
        //     break;
        //   case 9:
        //
        //     break;
        //   case 10:
        //
        //     break;
        //   default:
        //
        // }
      //}


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

function playGame (currWord) {
    // console.log("playGame()");
    let numTries = 0;
    let numTriesLeft = 0;
    let currChar = '';
    let charsMatched = [];
    let msgHeading = '';
    let msgOutput = '';
    let numSpaces = currWord[1];


}
window.onload = gameReset;
