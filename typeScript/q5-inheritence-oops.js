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
var Department = /** @class */ (function () {
    // firstName and lastName is a private member and is not accessible outside the class (encapsulation)
    function Department(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Department.prototype.getEmpDetails = function () {
        return "full Name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Department;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, departmentName, age) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.departmentName = departmentName;
        _this.age = age;
        return _this;
    }
    //example for absraction
    Manager.prototype.getDeptName = function () {
        return this.departmentName;
    };
    //example for interface
    Manager.prototype.details = function () {
        return "Age is  ".concat(this.age, " year old");
    };
    //example method overiding
    Manager.prototype.getEmpDetails = function () {
        return "department is ".concat(this.departmentName, " and age is ").concat(this.age);
    };
    return Manager;
}(Department));
var abc = new Manager("Peter", "Man", "IT", 33);
console.log(abc.getDeptName());
console.log(abc.details());
console.log(abc.getEmpDetails());
