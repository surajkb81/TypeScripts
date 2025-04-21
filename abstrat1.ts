abstract class Employee {
    constructor(private firstName:string, private lastName:string){
    }
    abstract getSalary():number;
    get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    getFullDetails():string{
        return `${this.fullName} got ${this.getSalary()} per month`;
    }
}
class GetEmployee extends Employee{
    constructor(firstName:string,lastName:string,private salary:number){
        super(firstName,lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
let emp1=new GetEmployee("anuj","singh",123456);
console.log(emp1.getFullDetails());
console.log(emp1.fullName);
console.log(emp1.getSalary());