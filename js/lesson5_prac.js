//1. Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-thenelse construct available in Javascript
function max(num1, num2){
    if(num1> num2){
        return num1;
    } else {
        return num2;
    }
}
console.log(max(3,4));

//2. Define a function maxOfThree() that takes three numbers as arguments 
//and returns the largest of them.
function maxOfThree(num1, num2, num3){
    if((num1 > num2) && (num1>num3)){
        return num1;
    }else if((num2>num1)&&(num2>num3)){
        return num2;
    } else{
        return num3;
    }
}
console.log(maxOfThree(2,3,5));


//3. Write a function isVowel() that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise
function isVowel(char){
    // if(char=== 'a' | char==='e' | char==='i' | char==='o' | char==='u'){
    //     return true;
    // }else{
    //     return false;
    // }
    if(char.length != 1){
        alert("Give a Charachter");
        return;
    } 
    if("AEIOUaeiou".includes(char)){
        return true;
    } else{return false;}
}
console.log(isVowel('w'));

//4. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in the given array of numbers. For example, sum([1,2,3,4]) should return 10, 
//and multiply([1,2,3,4]) should return 24.
//Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(arr1){
    let sum=0;
    // for(let i of arr1){
    //     sum+=i;
    // }
    for(let i=0; i<arr1.length;i++){
        sum+=arr1[i];
    }
    return sum;
}
console.log(sum([1,2,3,4]));

console.log("+++++++++++++++++++++++++++++");
//multiply
function multiply(arr2){
    let product=1;
    for(let i of arr2){
        product*=i;
    }
    return product;
}
console.log(multiply([1,2,3,4]));


//5. Define a function reverse(str) that computes the reversal of a string. For example,
// reverse("jag testar") should return the string "ratset gaj".
function reverse(str){
//     let newStr="";
//    for(let i=str.length-1; i>=0; i--){
//     newStr+= str.charAt(i);
//    }
//    return newStr;

return str.split("").reverse().join("");
}
console.log(reverse("jag testar"));


//6. Write a function findLongestWordLength() that takes an array of words and returns
// the length of the longest one.
function findLongestWordLength(arrWord){
    // let maxWord=arrWord[0];
    // for(let i=1; i< arrWord.length; i++){
    //     if(arrWord[i].length > maxWord.length){
    //         maxWord= arrWord[i];
    //     }
    // }
    // return maxWord.length;
    return arrWord.reduce((pre, cur)=>pre.length > cur.length ? pre.length: cur.length, "");
}
console.log(findLongestWordLength(["hi", "bye", "hello"]));


//7. Write a function filterLongWords() that takes an array of words and an integer i and 
//returns a new array containing only those words that were longer than i characters.
function filterLongWords(array, num){
   return array.filter(i=> i.length > num);
}
console.log(filterLongWords(["hi", "bye","hello"], 2));


//8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
//returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
//computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
//NOT use any explicit looping construct; instead use functional programming style/approach.
function computeSumOfSquares(arrNum){
       //return arrNum.map(i=>i*i);
       return arrNum.reduce((sum,i)=>sum+ i*i, 0);
}
console.log(computeSumOfSquares([1,2,3]));


//9. Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and
// prints only the numbers which are odd.
function printOddNumbersOnly(arrayNum){
    return arrayNum.filter( i=> i%2!==0);
}
console.log(printOddNumbersOnly([1,2,3,4,5]));


//10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
//and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
//computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.
function computeSumOfSquaresOfEvensOnly(arrIntegral){
       return arrIntegral.filter( i=> i%2===0).reduce((sum,i)=>sum+(i*i),0);
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));


//11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
//above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
//functional programming style/approach.
function sum2(ar){
      return ar.reduce((sum,i)=> sum+i);
}
console.log(sum([1,2,3]));


function multiply2(arrr){
    return arrr.reduce((product,i)=> product*i, 1);
}
console.log(multiply([1,2,3,4]));


//12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
//and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
//a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
//output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
//3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(len, a, b){
    let fib=[a,b];
    for(let i=2; i<len; i++){
        fib[i]= fib[i-1] + fib[i-2];
    }
    console.log(fib.join(','));
}
printFibo(6,0,1);



//Sort method using comparator
function compare(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    if(a==b) return 0;
}
let arr=[2,15,1];
arr.sort(compare)
console.log(arr);


//console.log(arr.sort());


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");

let libraryBooks = [
 { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
 { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
 { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
 { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
 ];

 //1. Write the following JavaScript functions:
 
// o addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
// library. addBook should return the newly created book.
function addBook(title, author, libraryID){
    let newBook ={title:title, author:author, libraryID:libraryID}
   //let newBook={title:"Me", author:"Myself",libraryID:123}
        libraryBooks.push(newBook);
        return newBook;
}
console.log(addBook("Me", "Myself", 123));
//console.log(addBook("me", "myself", 123));


// o getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
function getTitles(){
    return libraryBooks.map(e=> e.title).sort();
}
console.log(getTitles());

// o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in 
// the title and return books alphabetically ordered by the author.
function findBooks(keyword){
       return libraryBooks.filter(x=>x.title.includes(keyword)).sort((a,b)=>a.author.localeCompare(b.author));
}
console.log(findBooks('The'));

// 2. Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as 
// arguments and returns a new array that is formed by applying the function to each element of the array and saving 
// the result in the new array. Do not use the Array.map method in your code





//

// let a =10;
// function f(){
//     var b=30;
//     function g(){
//         console.log(b);
//         var c=a+b;
//         a=50;
//         return c;
//     }
//     b=20;
//     console.log(a);
//     return g;
// }
// let myFunc =f();
// let x= myFunc();
// console.log(x);
// console.log(a);


var b=1000;
function g(){
    var a=100;
    b=10;
    var z=a+b;
    console.log(z);
    function f(z){
        return 2*z;
    }
    var b=20;
    console.log(f(b));
}
g();
console.log(b);





// var a=10;
// function f(){
//     var b=30;
//     function B(){
//         console.log(b);
//         var c=a+b;
//         return c;
//     }
//     b=20;
//     return B;
// }
// let myFunc= f();
// let x=myFunc();
// console.log(x);
// console.log(a);
// let y=myFunc();
// console.log(y);




// let a=10;
// function f(){
//     var b=30;
//     function g(){
//         console.log(b);
//         var c= a+b;
//         a=50;
//         return c;
//     }
//     b=20;
//     console.log(a);
//     return g;
// }
// let myFunc=f();
// let x = myFunc();
// console.log(x);
// console.log(a);

