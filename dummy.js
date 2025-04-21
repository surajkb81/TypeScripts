var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "".concat(this.firstName, " ").concat(this.lastName);
    }
    Person.prototype.getName = function () {
        return this.fullName;
    };
    Person.prototype.setName = function (newName) {
        return this.fullName = newName;
    };
    return Person;
}());
var obj = new Person("sumit", "joshi");
console.log(obj.getName());
obj.setName("anuj singh");
console.log(obj.getName());
