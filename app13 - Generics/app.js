function users(data) {
    return data;
}
console.log(users("Bhuban"));
// console.log(users(20)); //give error because return type is string, also data type is string
// Solution: Change the datatype as shown below, Not mandatory to write `T` only but standard method is writing `T`
function user1(data) {
    return data;
}
console.log(user1("Bhuban"));
console.log(user1({ name: "Bhuban", age: 25 }));
console.log(user1({ name: "Bhuban", age: 25 }).name);
console.log(user1({ name: "Bhuban", age: 25 }).age);
