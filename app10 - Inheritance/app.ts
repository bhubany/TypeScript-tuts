// class Parent {
//   name = "";
//   setName(name) {
//     return (this.name = name);
//   }
// }
// class Child extends Parent {
//   getName() {
//     return this.name;
//   }
// }

// let c1 = new Child();
// c1.setName("Bhuban"); // first name is set
// console.log(c1.getName()); // using get we get name set earlier

// Defining Data Types
class Parent {
  name: string = "";
  setName(name): void {
    return (this.name = name);
  }
}
class Child extends Parent {
  getName(): string {
    return this.name;
  }
}

let c1 = new Child();
c1.setName("Bhuban"); // first name is set
console.log(c1.getName()); // using get we get name set earlier
