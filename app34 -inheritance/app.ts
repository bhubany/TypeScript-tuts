// parent class
class CreateAccount {
  makeEmail(person: string) {
    return `${person}@mail.com`;
  }
}

// child
class Users extends CreateAccount {
  addUser(user: string) {
    return `${user} is added as an user`;
  }
}

const u1 = new Users();
console.log(u1.addUser("bhuban"));
console.log(u1.makeEmail("bhuban"));

//grand child
class Employee extends Users {
  addEmployee(emp: string) {
    return `${emp} is addedas an employee`;
  }
}
// here inheritingmethods from parent and grand parent class
const u2 = new Employee();
console.log(u2.makeEmail("b2"));
console.log(u2.addUser("b2"));
console.log(u2.addEmployee("b2"));
