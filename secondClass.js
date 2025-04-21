// class Car{
//     speed:number ;
//     constructor(){
//         this.speed=50;
//     }
//     accelator():number{
//         return this.speed +=70;
//     }
//     checkSpeed():string{
//         return `the speed of the car is ${this.speed}`;
//     }
// }
// const obj=new Car();
// obj.checkSpeed();
// obj.accelator();
// obj.checkSpeed();
var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
    }
    Car.prototype.acc = function () {
        return this.speed += 70;
    };
    Car.prototype.checkSpeed = function () {
        return "The speed of a car is ".concat(this.speed);
    };
    return Car;
}());
var obj = new Car(); //initlize object 
obj.checkSpeed(); //50 
obj.acc(); //+70
obj.checkSpeed(); //120
