const person = {
  name: "bhuban",
  age: 25,
};

console.log(person);

//defining type of object

const person1: { name: string; age: number; email: string } = {
  name: "bhuban",
  age: 25,
  email: "abc@gmail.com",
};

console.log(person1);

// defining object type separately

type objType = { name: string; age: number; email: string };

const person2: objType = {
  name: "bhuban",
  age: 25,
  email: "abc@gmail.com",
};

// can used for creating multiple objects
const person3: objType = {
  name: "bhuban",
  age: 25,
  email: "abc@gmail.com",
};

// .....same as other
console.log(person2);
