// keep class name same as file name: not mandatory but recommended way
// class App {
//   name = "bhuban";
//   constructor() {
//     console.log("COnstructor is called");
//   }
//   getName() {
//     return this.name;
//   }
// }
// let a1 = new App();
// console.log(a1.getName());
// keep class name same as file name: not mandatory but recommended way
// class App {
//   name = "bhuban";
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// // let a1 = new App();
// let a1 = new App("Bhuban Yadav"); //passing value to constructor
// console.log(a1.getName());
// *** Defining Data types for class
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    App.prototype.logname = function () {
        console.log(this.name);
    };
    return App;
}());
// let a1 = new App();
var a1 = new App("Bhuban Yadav"); //passing value to constructor
console.log(a1.getName());
console.log(a1.logname());
