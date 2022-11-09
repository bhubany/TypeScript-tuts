// we haven't modified any properties that means these are public accessible
var Users = /** @class */ (function () {
    function Users() {
        this.name = "";
    }
    Users.prototype.setName = function (name) {
        this.name = name; //here this means this class i.e users and name is its property
    };
    Users.prototype.displayName = function () {
        console.log(this.name);
    };
    return Users;
}());
var u1 = new Users();
u1.setName("Bhuban");
u1.displayName();
// by mistakely if we changes, it have new value now
u1.name = "random";
u1.displayName();
// solution or making private the properties using keyword `private`
var Users1 = /** @class */ (function () {
    function Users1() {
        this.name = "";
    }
    Users1.prototype.setName = function (name) {
        this.name = name; //here this means this class i.e users and name is its property
    };
    Users1.prototype.displayName = function () {
        console.log(this.name);
    };
    return Users1;
}());
var u2 = new Users1();
u1.setName("Bhuban");
// u2.name = "random value"; // now it will show error while assigning values
u2.displayName();
// making function private
var User2 = /** @class */ (function () {
    function User2() {
        this.name = "";
    }
    User2.prototype.setName = function (name) {
        this.name = name;
    };
    User2.prototype.displayNameLength = function () {
        console.log("Length of name is : ".concat(this.name.length));
    };
    User2.prototype.displayName = function () {
        console.log(this.name);
        // private method accessing inside class
        this.displayNameLength();
    };
    return User2;
}());
var u3 = new User2();
u3.setName("b3");
u3.displayName();
// u3.displayNameLength(); //will show error because this method is set to private
