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
var Person //parent
 = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super); //child
    function Employee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getFullDetails = function () {
        return "".concat(this.getFullName(), " got ").concat(this.salary, " per month");
    };
    return Employee;
}(Person //child
));
var emp1 = new Employee("anuj", "singh", 45699);
console.log(emp1.getFullDetails());
var emp2 = new Employee("sanoj", "singh", 55699);
console.log(emp2.getFullDetails());
