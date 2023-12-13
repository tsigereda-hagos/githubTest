function User(name) {
    // this = {};	(implicitly)

    // add properties to this
    this.name = name;//this ={name:Jack}
    this.isAdmin = false;//this ={name:Jack, isAdmin:false}

    // return this;	(implicitly)    // return { x: 1, y: 5 }; if you return an object explicitly, this object will be returned instead this.
}

let user1 = new User("Jack");
let user2 = new User("Tom");

User.prototype.getName = function () { return this.name; }
user1.getIsAdmin = function () {
    return this.isAdmin;
}


console.dir(User);
console.log(User.prototype);
console.log(User.prototype.__proto__ === Object.prototype);//true
console.log(User.__proto__ === Function.prototype); //true




console.log(user1); // Jack
console.log(user1.isAdmin); // false
console.log(user1.a)
console.dir(User);
User();



// function User(firstname, lastname, birthDate) {
//     //this = {}
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthDate = birthDate;

//     //this={ firstname: John, lastname:Smith, birthdate:2000-10-01}
//     //return this;
// }


// let user1 = new User('John', 'Smith', new Date('2000-10-01'));
// let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));


// new User('John', 'Smith', new Date('2000-10-01'));

// User('John', 'Smith', new Date('2000-10-01'));

// User.prototype.getFullName = function () {
//     return this.firstname + ' ' + this.lastname;
// }

// user1.getFullName() = function () {
//     return this.firstname + ' ' + this.lastname;
// }

// User.getFullName = function () {
//     return this.firstname + ' ' + this.lastname;
// }
// User.prototype.getAge = function () {
//     return new Date().getFullYear() - this.birthDate.getFullYear();
// }

// console.log(user1.getFullName()); //John Smith console.log(user1.getAge()); //21


// Array.prototype.myGetLens = function () {
//     let arr = this;
//     let arrLen = [], i = 0;
//     for (let e of this) {
//         arrLen[i] = e.length;
//         i++
//     }
//     return arrLen
// }


// Array.prototype.getLens = function () {
//     return this.map(e => e.length);
// }

// console.dir(Array.prototype)
// let result = ["hihi", "hello"].myGetLens();
// console.log(result)



