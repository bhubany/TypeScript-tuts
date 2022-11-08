var users = {
    name: "bhuban",
    age: 25
};
console.log(users);
var user2 = {
    name: "yadav",
    age: 25,
    getName: function () {
        return this.name;
    }
};
console.log(user2);
console.log(user2.getName());
