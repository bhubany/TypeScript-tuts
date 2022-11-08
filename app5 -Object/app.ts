export {};

let users = {
  name: "a",
  age: "30",
  address: "b",
};

// users.name = 100;
// will gave error because name is initialized as string initially

console.log(users);
(users.name = "c"),
  // (users.email = "d@mail.com"); // will give error : property email doesnot exist
  console.log(users);

// defining property type

interface usersType {
  name: string;
  age: number;
  address: any;
}

let user2: usersType = {
  name: "bhuban",
  age: 25,
  address: true,
};

console.log(user2);
user2.address = "DPk-23";
console.log(user2);
