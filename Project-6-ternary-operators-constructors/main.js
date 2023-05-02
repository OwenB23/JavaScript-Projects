"use strict";

// ? operator
function Ride_Function() {
  var height, can_ride;
  height = document.getElementById("height").value;
  can_ride = height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("ride").innerHTML = can_ride + "to ride";
}

function license_function() {
  var age, can_get;
  age = document.getElementById("age").value;
  can_get = age < 16 ? "You are not old enough " : "You are old enough";
  document.getElementById("result").innerHTML = can_get + "to get your License";
}

// "New" and "this" operator

function vehicle(make, model, year, color) {
  this.vehicle_make = make;
  this.vehicle_model = model;
  this.vehicle_year = year;
  this.vehicle_color = color;
}

var Jack = new vehicle("dodge", "viper", 2020, "red");
var Emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var Erik = new vehicle("Ford", "pinto", 1971, "mustard");
function myFunction() {
  document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " +
    Erik.vehicle_color +
    "-colored " +
    Erik.vehicle_model +
    " " +
    "manufactured in " +
    Erik.vehicle_year;
}

//

function new_phone(brand, model, color) {
  this.new_phone_brand = brand;
  this.new_phone_model = model;
  this.new_phone_color = color;
}

var Owen = new new_phone("apple", "iphone 13", "white");
var Cameron = new new_phone("Apple", "iphone 14", "blue");
function phoneFunction() {
  document.getElementById("phones").innerHTML =
    "Owen owns a " +
    Owen.new_phone_color +
    " " +
    Owen.new_phone_brand +
    " " +
    Owen.new_phone_model;
}

// Nested Function

function nestFunction() {
  document.getElementById("nested_function").innerHTML = add();
  function add() {
    var first_number = 5;
    function plus_five() {
      first_number += 5;
      return first_number;
    }
    return plus_five();
  }
}
