interface Person {
    id?:string; //optional field in interface
    name:string;
    age:number;
    details():string;
}
class Employee implements Person{
    name:string;
    age:number;
    constructor( name:string,age:number){
        this.name=name;
        this.age=age;
    }
    details(): string {
        return `${this.name} is ${this.age} year old`;
    }
}
const emp=new Employee("anuj",45);
console.log(emp.details());