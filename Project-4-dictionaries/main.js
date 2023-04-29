"use strict";

// DICTIONARY FUNCTION
function my_dictionary() {
  const phone = {
    brand: "Apple",
    color: "White",
    model: "Iphone-13",
    memory: "64gb",
  };
  delete phone.color;
  document.getElementById("dictionary").innerHTML = phone.model;
}

console.log(my_dictionary);
