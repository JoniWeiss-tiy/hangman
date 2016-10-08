"use strict";

var min = 0;
var max = 99;
var randomNum;
var nextWord;

function getRandNum (imin,imax) {
  var floatNum = Math.random() * (imax - imin) + imin;
  return Math.floor(floatNum);
}

randomNum = getRandNum(min,max);

nextWord = commonWords[randomNum];

function displayMsg() {
  console.log(randomNum);
  console.log(nextWord);
}

window.onload = displayMsg;
