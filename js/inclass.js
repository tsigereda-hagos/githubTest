console.log("Hello from script.js")
// const username='cs472';
username='abc';

let i=10;
i='abc';
console.log(i);

var j=10;
j='hello';
console.log(j);

function sum(num1, num2){
return num1+num2;
}

// function sum(num1=0, num2=0){
// return num1+num2;
// }

// let total = sum(5,10);
let total=sum();
console.log(total);

console.log("==================")
function f(x) {
console.log("x: " + x);
}
f();
f(1);
f(2, 3);
f(2,3,4);



console.log("==================")
function log() {
console.log("No Arguments");
}
function log(x) {
console.log("1 Argument: " + x);
}
function log(x, y) {
console.log("2 Arguments: " + x + ", " + y);
}
log();
log(5);
log(6, 7);

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

const a = [10,200,10,100,1000];
const d = a.find(function (elem) { return elem > 100; });
console.log(d);
