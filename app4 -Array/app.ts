let users = ["a", "b", "c", "d"];
users.push("e");
// users.push(100); //will give array because earlier values on array are strings
console.log(users);

let user2 = ["a", "b", "c", "d", "10", 10];
user2.push(10);
user2.push("d");
console.log(user2);

// defining data types

let user3: string[] = ["a", "b", "c"];
// user3.push(10) // will give error: only strings are allowed
user3.push("d");
console.log(user3);

let user4: any[] = ["a", "b", true, 10];
// allows all kind of values
user4.push(false);
user4.push(11);
user4.push("d");
console.log(user4);

// dfor tuple
let user5: [string, number] = ["a", 10];
user5.push("a");
user5.push(9);
user5.push("a");
user5.push(10);
console.log(user5);
