var _a;
var s1 = Symbol();
var s2 = Symbol();
console.log(s1, s2);
// using daata
var s3 = Symbol("data1");
console.log(s3.toString());
var data1 = {
    s1: "Some Data"
};
console.log(data1.s1);
// using key as an array
var data = (_a = {},
    _a[s1] = "Some Data",
    _a);
console.log(data[s1]);
// using class
var getData = Symbol();
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[getData] = function () {
        return "Some Data";
    };
    return Demo;
}());
var d = new Demo();
console.log(d[getData]());
