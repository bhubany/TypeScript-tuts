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
class App {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  logname(): void {
    console.log(this.name);
  }
}

// let a1 = new App();
let a1 = new App("Bhuban Yadav"); //passing value to constructor
console.log(a1.getName());
console.log(a1.logname());
