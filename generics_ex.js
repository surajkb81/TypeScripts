var Service = /** @class */ (function () {
    function Service() {
        this.data = [];
    }
    Service.prototype.create = function (item) {
        this.data.push(item);
    };
    Service.prototype.getAll = function () {
        return this.data;
    };
    Service.prototype.update = function (index, updatedata) {
        this.data[index] = updatedata;
    };
    Service.prototype.delete = function (index) {
        this.data.splice(index, 1);
    };
    return Service;
}());
var userService = new Service();
userService.create({ id: 101, name: 'A', email: 'abc@gmail.com' });
userService.create({ id: 102, name: 'B', email: 'abc1@gmail.com' });
console.log(userService.getAll());
userService.update(0, { id: 104, name: 'C', email: 'abs8888@newmail.com' });
console.log(userService.getAll());
userService.delete(0);
console.log(userService.getAll());
var prodService = new Service();
prodService.create({ id: 1, pname: 'A', price: 3456 });
prodService.create({ id: 2, pname: 'B', price: 4444 });
console.log(prodService.getAll());
