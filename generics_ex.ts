interface User{
   id:number;
   name:string;
   email:string;
}
interface Product{
   id:number;
   pname:string;
   price:number;
}
class Service<T>{
    private data:T[]=[];
    create(item:T):void{
      this.data.push(item);
    }
    getAll():T[]{
        return this.data;
    }
    update(index:number,updatedata:T):void{
        this.data[index]=updatedata;
    }
    delete(index:number):void{
        this.data.splice(index,1);
    }
}
const userService=new Service<User>();
userService.create({id:101,name:'A',email:'abc@gmail.com'});
userService.create({id:102,name:'B',email:'abc1@gmail.com'});
console.log(userService.getAll());

userService.update(0,{id:104,name:'C',email:'abs8888@newmail.com'});
console.log(userService.getAll());
userService.delete(0);
console.log(userService.getAll());

const prodService=new Service<Product>();
prodService.create({id:1,pname:'A',price:3456});
prodService.create({id:2,pname:'B',price:4444});
console.log(prodService.getAll());