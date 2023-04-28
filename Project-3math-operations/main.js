"use strict";

// ADDITION
function mathAddition() {
  const addition = 5 + 5;
  document.getElementById("mathAdd").innerHTML = "5 + 5 = " + addition;
}

// SUBTRACTION
function mathSubtraction() {
  const subtraction = 5 - 5;
  document.getElementById("mathSub").innerHTML = "5 - 5 = " + subtraction;
}

// MULTIPLICATION
function mathMultiplication() {
  const multiply = 12 * 12;
  document.getElementById("mathx").innerHTML = "12 * 12 = " + multiply;
}

// DIVISION
function mathDivision() {
  const divide = 12 / 6;
  document.getElementById("mathDiv").innerHTML = "12 / 6 = " + divide;
}

// MATHEMATICAL OPERATION
function operation() {
  const simpleMath = 10 + 5 - (5 * 10) / 10;
  document.getElementById("mathOperation").innerHTML =
    "Ten plus five, minus five, multiplied by 10, and divided by ten = " +
    simpleMath;
}

// MODULUS OPERATOR
function modulus_operator() {
  const modMath = 50 % 6;
  document.getElementById("mathMod").innerHTML =
    "When you divide 50 by 6 you have a remainder of: " + modMath;
}

// NEGATION OPERATOR

function negation_operator() {
  const x = 10;
  document.getElementById("mathNegative").innerHTML = -x;
}

// INCREMENT OPERATORS

const x = 10;
x++;
document.write(x);

const y = 11;
y--;
document.write(y);

// RANDOM NUMBER

window.alert(Math.random() * 100);

//MATH OBJECT METHOD EXAMPLE

document.getElementById("round").innerHTML = Math.round(4.6);
