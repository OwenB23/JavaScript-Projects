"use strict";

// Concatinating strings
var x = "Hello ";
var y = "World Concatinated";

var z = x.concat(y);
console.log(z);

// Slice Method
function sliceMethod() {
  var sentence = "All work and no play makes Jhonny a dull boy";
  var section = sentence.slice(27, 33);
  document.getElementById("slice").innerHTML = section;
}

// toUpperCase Method
var string1 = "hello world uppercase";
var upperCaseString = string1.toUpperCase();

console.log(upperCaseString);

// Search Method
var string2 = "Hello World";
var position = string2.search("World");

console.log(position);

// Number Methods
function stringMethod() {
  var o = 100;
  document.getElementById("numbersToString").innerHTML = o.toString();
  console.log(typeof o);
}

// ToPrecision Method
function precisionMethod() {
  var n = 8398.5243;
  document.getElementById("precision").innerHTML = n.toPrecision(5);
}

// ToFixed Method
var num1 = 3.14159;
var formattedNum = num1.toFixed(2);

console.log(formattedNum);

// valueOf Method
var str = new String("Hello World Value");
console.log(str.valueOf());
