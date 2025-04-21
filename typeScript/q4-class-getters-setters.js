var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "getEmpId", {
        get: function () {
            console.log("employee ID is  ".concat(this.employee_id));
            return this.employee_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getEmpName", {
        get: function () {
            console.log("employee Name is  ".concat(this.employee_name));
            return this.employee_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getEmpSal", {
        get: function () {
            console.log("employee Salary is  ".concat(this.employee_salary));
            return this.employee_salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeDetails", {
        set: function (input) {
            this.employee_id = input.employee_id;
            this.employee_name = input.employee_name;
            this.employee_salary = input.employee_salary;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
emp.employeeDetails = {
    employee_id: "0001",
    employee_name: "Sharon Stone",
    employee_salary: 6000
};
emp.getEmpId;
emp.getEmpName;
emp.getEmpSal;
