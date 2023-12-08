// let user = {
// firstName: "John", 
// sayHi() {
// console.log(this)
// console.log(`Hello, ${this.firstName}!`);
// }
// };
// user.sayHi(); //works  //Hello, John!
// setTimeout(user.sayHi, 2000); //problem!  // takes window's this, it is in global scope
//setTimeout is a window function  //Hello, undefined!
console.log("+++++++++++++++++++++++++++++++++++++++++")

// let user = {
// firstName: "John", 
// sayHi() {
// console.log(`Hello, ${this.firstName}!`);
// }
// };
// setTimeout(user.sayHi, 1000); // Hello, undefined
// console.log("+++++++++++++++++++++++++++++++++++++++++++")

// function greeting() { 
// console.log(this);
// }
// let user = { firstName:
// "John", sayHi() {
// console.log(this);
// }
// };
// console.log(this); // this is window object
// greeting(); // greeting() is called by global window object, this is window
// user.sayHi(); //sayHi() is called by the object user, this is user


console.log("++++++++++++++++++++++++++++++++++++++++==")

let user = {
firstName: "John", 
sayHi() {
console.log(`Hello, ${this.firstName}!`);
}
};
setTimeout(function() { user.sayHi(); }, 2000); //wrapped
//Or
setTimeout(() => user.sayHi(), 2000);
