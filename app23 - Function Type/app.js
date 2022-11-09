function add() {
    return 200;
}
console.log(add());
var a = 10;
var b = 10;
var c = "String";
var d = 10;
function add1() {
    return a + b;
}
function add2() {
    return a + c;
}
console.log(add1()); // will work fine
console.log(add2()); //give error because defined return type is number, but returning string value
