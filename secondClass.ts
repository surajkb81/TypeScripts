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

class Car{
    speed:number;
    constructor(){
        this.speed=50;
    }
    acc():number{
       return this.speed+=70;
    }
    checkSpeed():string{
        return `The speed of a car is ${this.speed}`;
    }
}
const obj=new Car();//initlize object 
obj.checkSpeed();//50 
obj.acc();//+70
obj.checkSpeed();//120
