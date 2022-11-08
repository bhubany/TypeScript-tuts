let users = {
  name: "bhuban",
  age: 25,
};
console.log(users);

// defining datatypes for users
interface usersType {
  name: string;
  age: number;
  getName: () => string;
}

let user2: usersType = {
  name: "yadav",
  age: 25,
  getName: function () {
    return this.name;
  },
};

console.log(user2);
console.log(user2.getName());
