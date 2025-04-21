class Employee{
    constructor(){
    }
   employee_id:string;
    employee_name:string;
    employee_salary:number;

    get getEmpId():string{
        console.log(`employee ID is  ${this.employee_id}`);
        return this.employee_id;
    }
    get getEmpName():string{
        console.log(`employee Name is  ${this.employee_name}`);
        return this.employee_name;
    }
    get getEmpSal():number{
        console.log(`employee Salary is  ${this.employee_salary}`);
        return this.employee_salary;
    }
    set employeeDetails(input:any){
       this.employee_id=input.employee_id;
       this.employee_name=input.employee_name;
       this.employee_salary=input.employee_salary;
    }
}
const emp = new Employee();
emp.employeeDetails={
    employee_id:"0001",
    employee_name:"Sharon Stone",
    employee_salary:6000
}
emp.getEmpId;
emp.getEmpName;
emp.getEmpSal;