"use strict";

const header = document.getElementById("header");
header.style.color = "red";

// button
function displayDate() {
  document.getElementById("time").innerHTML = Date();
}

// Sentence
function myFunction() {
  var sentence = "I am learning";
  sentence += " alot from this book.";
  document.getElementById("concatenate").innerHTML = sentence;
}

//Fruit Function
function fruitGenerator(apples, oranges) {
  return { apples, oranges };
}

const result = fruitGenerator(7, 8);
console.log(
  `You have won ${result.apples} apples and ${result.oranges} oranges. Congratulations!`
);

const owen = fruitGenerator(21, 22);
console.log(
  `Owen you have won ${owen.apples} apples, and ${owen.oranges} oranges. Congratulations!`
);
