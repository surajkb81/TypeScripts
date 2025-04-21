var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.details = function () {
        return "".concat(this.name, " is ").concat(this.age, " year old");
    };
    return Employee;
}());
var emp = new Employee("anuj", 45);
console.log(emp.details());
