interface Employee {
    empID?:any;
    name?:string;
    age:number;
    details():string;
}
abstract class Department {
    // firstName and lastName is a private member and is not accessible outside the class (encapsulation)
    constructor(private firstName:string, private lastName:string){
    }
    abstract getDeptName():string;
    getEmpDetails():string{
        return `full Name is ${this.firstName} ${this.lastName}`
    }
}
class Manager extends Department implements Employee{
    age:number;
    constructor(firstName:string, lastName:string,private departmentName:string,age:number){
        super(firstName,lastName);
        this.age=age;
    }
    //example for absraction
    getDeptName():string{
        return this.departmentName;
    }
    //example for interface
    details(): string {
        return `Age is  ${this.age} year old`;
    }
    //example method overiding
    getEmpDetails():string{
        return `department is ${this.departmentName} and age is ${this.age}`
    }

}
let abc = new Manager("Peter","Man","IT",33);
console.log(abc.getDeptName());
console.log(abc.details());
console.log(abc.getEmpDetails());