var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "".concat(this.firstName, " ").concat(this.lastName);
    }
    Object.defineProperty(Person.prototype, "empName", {
        get: function () {
            return this.fullName;
        },
        set: function (newName) {
            this.fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var obj = new Person("sumit", "joshi");
console.log(obj.empName); //getter 
obj.empName = "anuj singh"; //setter 
console.log(obj.empName);
