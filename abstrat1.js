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
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getFullDetails = function () {
        return "".concat(this.fullName, " got ").concat(this.getSalary(), " per month");
    };
    return Employee;
}());
var GetEmployee = /** @class */ (function (_super) {
    __extends(GetEmployee, _super);
    function GetEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    GetEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return GetEmployee;
}(Employee));
var emp1 = new GetEmployee("anuj", "singh", 123456);
console.log(emp1.getFullDetails());
console.log(emp1.fullName);
console.log(emp1.getSalary());
