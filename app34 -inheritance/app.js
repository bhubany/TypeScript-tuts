var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent class
var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
    }
    CreateAccount.prototype.makeEmail = function (person) {
        return "".concat(person, "@mail.com");
    };
    return CreateAccount;
}());
// child
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is added as an user");
    };
    return Users;
}(CreateAccount));
var u1 = new Users();
console.log(u1.addUser("bhuban"));
console.log(u1.makeEmail("bhuban"));
//grand child
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.addEmployee = function (emp) {
        return "".concat(emp, " is addedas an employee");
    };
    return Employee;
}(Users));
// here inheritingmethods from parent and grand parent class
var u2 = new Employee();
console.log(u2.makeEmail("b2"));
console.log(u2.addUser("b2"));
console.log(u2.addEmployee("b2"));
