"use strict";

const age1 = 25;

function calcAge() {
  console.log(`Owen is ${age1} years old. `);
}

//If statements

function getDate() {
  if (new Date().getHours() < 18) {
    document.getElementById("time").innerHTML = "It's 5 o'clock somewhere";
  }
}

// If Else
function calcAge() {
  const minAge = 16;
  const age = document.getElementById("ageInput").value;
  if (age < minAge) {
    document.getElementById("ageResult").innerHTML =
      "You are not old enough to take the driver's test.";
  } else {
    document.getElementById("ageResult").innerHTML =
      "You are old enough to take the driver's test!";
  }
}

//  Else if
function timeFunction() {
  var time = new Date().getHours();
  var reply;
  if (time < 12 == time > 0) {
    reply = "It is morning time";
  } else if (time >= 12 == time < 18) {
    reply = "It is afternoon";
  } else {
    reply = "It is evening time";
  }
  document.getElementById("timeOfDay").innerHTML = reply;
}
