class User {
  name: "";
  email: "";

  addUser(user) {
    return `${user} is Added`;
  }
  removeUser(user) {
    console.log(`${user} is removed`);
  }
}

const User1 = new User();
const result = User1.addUser("Bhuban");
console.log(result);
User1.removeUser("Bruce");
