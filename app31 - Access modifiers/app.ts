// we haven't modified any properties that means these are public accessible

class Users {
  name = "";
  setName(name: any) {
    this.name = name; //here this means this class i.e users and name is its property
  }
  displayName() {
    console.log(this.name);
  }
}

const u1 = new Users();
u1.setName("Bhuban");
u1.displayName();
// by mistakely if we changes, it have new value now
u1.name = "random";
u1.displayName();

// solution or making private the properties using keyword `private`

class Users1 {
  private name = "";
  setName(name: any) {
    this.name = name; //here this means this class i.e users and name is its property
  }
  displayName() {
    console.log(this.name);
  }
}

const u2 = new Users1();
u1.setName("Bhuban");
// u2.name = "random value"; // now it will show error while assigning values
u2.displayName();

// making function private

class User2 {
  private name = "";

  setName(name: any) {
    this.name = name;
  }
  private displayNameLength() {
    console.log(`Length of name is : ${this.name.length}`);
  }
  displayName() {
    console.log(this.name);
    // private method accessing inside class
    this.displayNameLength();
  }
}

const u3 = new User2();
u3.setName("b3");
u3.displayName();
// u3.displayNameLength(); //will show error because this method is set to private
