let s1 = Symbol();
let s2 = Symbol();
console.log(s1, s2);

// using daata
let s3 = Symbol("data1");

console.log(s3.toString());

let data1 = {
  s1: "Some Data",
};

console.log(data1.s1);

// using key as an array
let data = {
  [s1]: "Some Data",
};

console.log(data[s1]);

// using class
let getData = Symbol();
class Demo {
  [getData]() {
    return "Some Data";
  }
}

let d = new Demo();
console.log(d[getData]());
