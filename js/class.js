//class declaration should be after


//class declaration, let & const
// class User{

// }
// let user = new User();

// //class expression
// let Person=class{

// };
// new Person();



//class exercise
class Employee{
    #fullname;
    salary;  // no isssue for public method properties/ can leave it without writting
    static #counter=0;  //how many Employee instances we created-count
    
    constructor(fullname,salary){
        this.#fullname=fullname;
        this.salary=salary;
        Employee.#increment(); //
    }
    static #increment(){  //private
        Employee.#counter++;  //this.#counter++;
    }
    static getCounter(){
       return Employee.#counter; // coz it is private// return this.#counter; 
    }
    get name(){
        return this.#fullname;
    }
    set name(value){
        this.#fullname=value;
    }
    getSalary(){
        return this.salary;
    }
    #display(){
       console.log("Employee");
    }


}

let emp1 =new Employee("John John", 12345);
let emp2 =new Employee("Rose", 120000);
//console.log(emp1.#fullname);//can't access outside class - private
emp2.salary=2000; //we can assign salary later
console.log(emp1.salary); // accessible
console.log(emp1.name);
emp1.name="Anna";
console.log(emp1.name);

console.log(Employee.getCounter); // counter os private
console.log(emp1.getSalary);



class Manager extends Employee{
    bonus;
       constructor(name, salary, bouns){
        super(name, salary);
        this.bouns=bouns;
       }
       display(){
        //super.#display(); // private //Error!
        console.log("Manager");
       }
       calcSalary(){
       // return super.getSalary()+this.bouns;
        //return this.getSalary()+this.bouns; // get from this class
        return super.salary()+this.bouns;// coz salary is public
       }

}

let mgr =new Manager("Smith", 12345678, 123);
console.log(Employee.getCounter());
console.log(Manager.getCounter());  //get it from parent // static methods are inherited too

console.log(emp1);
console.log(mgr);

console.dir(Employee); //print out all the properties
console.dir(Employee.prototype);
console.dir(emp1);
console.dir(mgr);
console.dir(Manager.prototype);
console.dir(Manager);








//for Lab-9 Map reference

// let map = new Map();
// map.set(1, "Anna");
// map.set(2, "John");
// map.set(3, "Tom");

// console.log(map.get(1));
// map.delete(1)

// for (let key of map.keys())
//     console.log(key);

// for (let v of map.values())
//     console.log(v);

// console.log(map.size);

// map.forEach((k, v, m) => console.log(k, v, m))