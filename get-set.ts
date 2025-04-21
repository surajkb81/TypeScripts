class Person{
    fullName:string;
    constructor(private firstName:string,private lastName:string){
         this.fullName=`${this.firstName} ${this.lastName}`;
    }
    get empName():string{
        return this.fullName;
    }
    set empName(newName:string){
         this.fullName=newName
    }
   
}
const obj=new Person("sumit","joshi");
console.log(obj.empName);//getter 
obj.empName="anuj singh";//setter 
console.log(obj.empName)