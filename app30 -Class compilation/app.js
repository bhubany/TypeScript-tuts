var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.addUser = function (user) {
        return "".concat(user, " is Added");
    };
    User.prototype.removeUser = function (user) {
        console.log("".concat(user, " is removed"));
    };
    return User;
}());
var User1 = new User();
var result = User1.addUser("Bhuban");
console.log(result);
User1.removeUser("Bruce");
