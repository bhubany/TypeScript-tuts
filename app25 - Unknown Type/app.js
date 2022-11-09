var value;
console.log(typeof value);
value = 30;
console.log(typeof value);
var val2;
console.log(typeof val2);
val2 = "hello";
console.log(typeof val2);
// *** Both work similarly difference is only while assigning values
var val3;
val3 = "string";
var val4;
val4 = val3; // here we can assign values, as any can switch data types
var val5;
val5: "string";
var val6;
// val6 = val5; // will give error unknown is not assignable to type string
// solution for such scenario is: It will work fine
if (typeof val5 === "string") {
    val6 = val5;
}
