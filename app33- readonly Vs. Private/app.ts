class Users {
  name = "bhuban";
  private name1 = "bhuban1";
  readonly name2 = "bhuban2";
}

const u1 = new Users();
console.log(u1.name);
u1.name = "random"; // can change since by default it is public
console.log(u1.name);
// u1.name1 = "random1"; // cannot be modified since it is private
// console.log(u1.name1); // cannot be accessed since it is private
console.log(u1.name2);
u1.name2 = "random2"; // Error: cannot modify since it is set to readonly
console.log(u1.name2);
