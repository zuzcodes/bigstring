"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log(start);
  document.querySelector("#button").addEventListener("click", getResult);
}

function getResult() {
  const insertedText = document.querySelector("#addtext").value;
  const selectedOption = document.querySelector("#dropdown").value;
  const firstSpace = insertedText.indexOf(" ");
  const lastSpace = insertedText.lastIndexOf(" ");
  const hidePassword = "*";

  let answer;

  if (selectedOption === "opt1") {
    answer =
      insertedText[0].toUpperCase() + insertedText.substring(1).toLowerCase();
  } else if (selectedOption === "opt2") {
    answer = insertedText.substring(0, firstSpace);
  } else if (selectedOption === "opt3") {
    answer = insertedText.substring(0, firstSpace).length;
  } else if (selectedOption === "opt4") {
    answer = insertedText.substring(firstSpace + 1, lastSpace).trim();
  } else if (selectedOption === "opt5") {
    answer = insertedText.includes(".jpg") || insertedText.includes(".png");
  } else if (selectedOption === "opt6") {
    answer = hidePassword.repeat(insertedText.length);
  } else if (selectedOption === "opt7") {
    const letUp = insertedText.substring(0, 2).toLowerCase();
    const letLow = insertedText[2].toUpperCase();
    const letOthers = insertedText.substring(3).toLowerCase();

    answer = letUp + letLow + letOthers;
  } else {
    // entry with space
    const beforePart = insertedText.substring(0, firstSpace + 1);
    const character = insertedText[firstSpace + 1];
    const afterPart = insertedText.substring(firstSpace + 2);
    const capitalized =
      beforePart.toLowerCase() +
      character.toUpperCase() +
      afterPart.toLowerCase();

    // entry with hyphen
    const hyphen = insertedText.indexOf("-");

    const beforeHpart = insertedText.substring(0, hyphen + 1);
    const characterH = insertedText[hyphen + 1];
    const afterHpart = insertedText.substring(hyphen + 2);

    const hyphened =
      beforeHpart + characterH.toUpperCase() + afterHpart.toLowerCase();

    if (insertedText.includes("-")) {
      answer = hyphened;
    } else {
      answer = capitalized;
    }
  }
  document.querySelector("#result").value = answer;
}
