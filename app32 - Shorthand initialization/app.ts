class Users {
  name = "";
  age = 0;
  email = "";
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    console.log(name, age, email);
  }

  displayVal() {
    console.log(this.name, this.age, this.email);
  }
}

const u1 = new Users("Bhuban", 25, "abc@gmail.com");
u1.displayVal();
// the above method is working fine. but is lenthy process as the number of properties increases, code length will also increase
// so solution is:
class Users1 {
  constructor(public name: string, public age: number, public email: string) {
    console.log(name, age, email);
  }

  displayVal() {
    console.log(this.name, this.age, this.email);
  }
}

const u2 = new Users("Bhuban", 25, "abc@gmail.com");
u2.displayVal();

// we can use access modifiers on arguments
// *** This is called shorthand initialization
