function add(): number {
  return 200;
}

console.log(add());

let a = 10;
let b = 10;
let c = "String";
let d = 10;

function add1(): number {
  return a + b;
}

function add2(): number {
  return a + c;
}

console.log(add1()); // will work fine
console.log(add2()); //give error because defined return type is number, but returning string value
