class Person//parent
{
    constructor(private firstName:string,private lastName:string){
    }
    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person //child
{
    constructor(firstName:string,lastName:string,private salary:number){
        super(firstName,lastName);
    }
    getFullDetails():string{
        return `${this.getFullName()} got ${this.salary} per month`;
    }
}
const emp1=new Employee("anuj","singh",45699);
console.log(emp1.getFullDetails());
const emp2=new Employee("sanoj","singh",55699);
console.log(emp2.getFullDetails());