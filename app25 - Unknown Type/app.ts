let value: any;
console.log(typeof value);

value = 30;

console.log(typeof value);

let val2: unknown;
console.log(typeof val2);

val2 = "hello";
console.log(typeof val2);

// *** Both work similarly difference is only while assigning values

let val3: any;
val3 = "string";

let val4: string;
val4 = val3; // here we can assign values, as any can switch data types

let val5: unknown;
val5: "string";

let val6: string;
// val6 = val5; // will give error unknown is not assignable to type string

// solution for such scenario is: It will work fine
if (typeof val5 === "string") {
  val6 = val5;
}
