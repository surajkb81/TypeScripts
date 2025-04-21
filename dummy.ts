class Person{
    fullName:string;
    constructor(private firstName:string,private lastName:string){
         this.fullName=`${this.firstName} ${this.lastName}`;
    }
    getName():string{
        return this.fullName;
    }
    setName(newName:string):string{
        return this.fullName=newName;
    }
}
const obj=new Person("sumit","joshi");
console.log(obj.getName());
obj.setName("anuj singh");
console.log(obj.getName());
