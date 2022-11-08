"use strict";
exports.__esModule = true;
function cal() {
    return 100;
}
console.log(cal());
function cal1() {
    return 100;
    // return "Hello !"; // give error because is defined as number
}
console.log(cal());
function cal2(a, b) {
    return a + b;
}
console.log(cal2(3, 2));
// if second parameter is optional then we place ? as shown below
function cal3(a, b) {
    return b ? a + b : a; // checking if b exist then sum else return value of a
}
console.log(cal3(3));
