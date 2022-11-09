var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = "";
        this.age = 0;
        this.email = "";
        this.name = name;
        this.age = age;
        this.email = email;
        console.log(name, age, email);
    }
    Users.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users;
}());
var u1 = new Users("Bhuban", 25, "abc@gmail.com");
u1.displayVal();
// the above method is working fine. but is lenthy process as the number of properties increases, code length will also increase
// so solution is:
var Users1 = /** @class */ (function () {
    function Users1(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        console.log(name, age, email);
    }
    Users1.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users1;
}());
var u2 = new Users("Bhuban", 25, "abc@gmail.com");
u2.displayVal();
// we can use access modifiers on arguments
// *** This is called shorthand initialization
