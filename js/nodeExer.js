// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('Tsigereda');


function foo() {
console.log('foo');
}
process.nextTick(foo); 
console.log('bar');

setTimeout(foo, 0); 
console.log('bar');


//  setTimeout(() => { console.log('timeout'); }, 0);
//  process.nextTick(()=> console.log('nexttick'));
//  setImmediate(() => { console.log('immediate'); });

