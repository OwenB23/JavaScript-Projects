"use strict";

function call_loop() {
  var digit = "";
  var x = 1;
  while (x < 11) {
    digit += "<br>" + x;
    x++;
  }
  document.getElementById("loop").innerHTML = digit;
}

// While loop .length

const fruitArray = ["apples, ", "oranges, ", "grapes, ", "bananas!"];

function loopArray(fruitArray) {
  let i = 0;
  while (i < fruitArray.length) {
    document.write(fruitArray[i]);
    i++;
  }
}

// For loop .length

const veggieArray = ["brocoli, ", "green beans, ", "lettuce, ", "cucumber! "];

function for_loop(veggieArray) {
  for (let i = 0; i < veggieArray.length; i++) {
    document.write(veggieArray[i]);
  }
}

// Get element by id function
function dogBreeds() {
  let breeds = ["Golden Retriever", "Shitzu", "Dalmation"];
  document.getElementById("dogs").innerHTML =
    "You just recevied a brand new " + breeds[2] + " puppy!";
}

//Constant Function

function constantFunction() {
  const cars = { brand: "BMW", type: "Muscle", color: "Red" };
  cars.color = "Orange";
  document.getElementById("constant").innerHTML =
    "Congratulations! You just won a brand new " +
    cars.color +
    " " +
    cars.brand +
    ", Be safe and enjoy!";
}

// Return
function returnFunction() {
  return "Hello Owen";
}

function showMessage() {
  const message = returnFunction();
  document.getElementById("return").innerHTML = message;
}

// Object

let phone = {
  brand: "Apple ",
  year: "2022 ",
  color: "White ",
  type: " Iphone",
  description: function () {
    return (
      "You just won a brand new " +
      this.year +
      this.color +
      this.brand +
      this.type +
      ". Congratulations!"
    );
  },
};
document.getElementById("phoneObject").innerHTML = phone.description();

// Break and Continue Statements

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

//

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
