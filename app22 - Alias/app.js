function combine(a, b, type) {
    if (type === "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20, "as-number"));
console.log(combine("bhuban", " yadav", "as-string"));
// Here we can see that on function argument we are defining multiple data types for a single argument which is lengthy
// instead of this we can use aliass
var c = 20;
var d = 20;
var e = 20;
var f = 20;
var g = "string";
var h = true;
function combine2(a, b) {
    return { a: a, b: b };
}
console.log(combine2(3, 4));
