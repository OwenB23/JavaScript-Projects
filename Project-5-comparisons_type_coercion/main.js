"use strict";

const x = 25;
const y = "20";
const z = x + y;

console.log(z);
console.log(typeof 25);

// Displaying NaN

console.log(0 / 0);
console.log(isNaN("hello"));
console.log(isNaN(10));

// Displaying Infinity
console.log(1 / 0);
console.log(-1 / 0);

// Displaying Boolean

console.log(10 > 5);
console.log(10 < 5);

// Double Equal Sign

console.log(21 == 10 + 11);
console.log(21 == 1 + 11);

// Triple ===

const age = 25;
const years = 25;
console.log(age === years);

const a = 12;
const b = "12";
console.log(a === b);

const o = "Owen";
const c = 25;
console.log(o === b);

const red = "red";
const blue = "blue";
console.log(red === blue);

// && || Operators

console.log(10 > 2 && 10 > 3);
console.log(10 > 12 && 10 > 18);

console.log(10 > 12 || 10 > 5);
console.log(10 > 19 || 10 > 12);

// ! Operator

const not = !(5 > 10);
console.log(not);

const not2 = !(10 > 5);
console.log(not2);
