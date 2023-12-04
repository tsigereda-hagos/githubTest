  //number-1
  function max(num1, num2){
        if(num1 > num2){
            return num1;
        } else {
            return num2;
        }
    }
    let result=max(5,8);
    console.log(result);

    //number-2
    function maxOfThree(num1, num2, num3){
        if((num1>num2)&(num1>num3)){
            return num1;
        } else if((num2>num3)&(num2>num1)){
            return num2;
        } else{
            return num3;
        }
    }

    let maxResult=maxOfThree(5,8,9);
    console.log(maxResult);

    //number-3
    function isVowel(letter){
        if((letter=='a') |(letter=='e')|(letter=='i')|(letter=='o')|(letter=='u')){
            return true;
        } else{
            return false;
        }
    }

    let vowelResult=isVowel('o');
    console.log(vowelResult);

    //number-4
    function sumArray(arr){
        let sum=0;
        for(let i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }

    let sumResult=sumArray([1,2,3,4]);
    console.log(sumResult);

    //number-4 Multiply
    function multiplyArray(arr){
        let product=1;
        for(let i=0; i<arr.length; i++){
            product*=arr[i];
        }
        return product;
    }

    let multiplyResult=multiplyArray([1,2,3,4]);
    console.log(multiplyResult);

    //number-5
    function reverse(str){
        return str.split('').reverse().join('');
    }

    let reverseResult=reverse("sunday");
    console.log(reverseResult);


    //number-6
    function findLongestWordLength(arr){
        let max=arr[0].length;
        for(let i=1; i<arr.length; i++){
           if(arr[i].length > max){
            max=arr[i].length;
           }
        }
        return max;
        
    }
    let aresult=findLongestWordLength(['hi', 'bye', 'come']);
    console.log(aresult);

    //number-7
    function filterLongWords(arr,num){
        let newArray=[];
        for(let i=0; i< arr.length; i++){
            if(arr[i].length>num){
                newArray+=arr[i]+" ";
            }
        }
        return newArray;
    }

    let resultNewArray= filterLongWords(['hi','bye','come','go'],2);
    console.log(resultNewArray);

    //number-8
    // function computeSum(arr){
    //    return arr.map((item)=>item*item).reduce((sum,current) => sum+current, 0);
    //    // return arr.reduce((sum,num)=>sum + num*num,0);
    // }
    // let resultCompu=computeSum([1,2,3]);
    // console.log(resultCompu);

    let arr=[1,2,3];
    let result22= arr.reduce(function(sum,current){
        return sum+current*current;},0);

     console.log(result22);
    
    //number-9
    // function printOddNumbersOnly(number){
    //     let number=[];
    //     let oddNumbers=[];
    //     for(let i=0; i<number.length; i++){
    //         if(number[i]%2!=0){
    //              oddNumbers+=number[i];
    //         }
    //     }
    //     return oddNumbers;
    // }

    // let resultOdd=printOddNumbersOnly([1,2,3,4,5,6,7]);
    // console.log(resultOdd);

     function printOddNumbersOnly(arr) {
          return  arr.filter((element) => element % 2 == 1);
         }
         let resultOdd=printOddNumbersOnly([1,2,3,4,5,6,7]);
         console.log(resultOdd);

    //number- 10
    //  function computeSumOfSquaresOfEvens(array){
    // let resultArr1=[];
    //  for(let i=0;i<array.length;i++){
    //     if(array[i]%2==0){
    //             resultArr1.push(array[i]);
    //     }
    //  }
    //  return resultArr1.reduce((sum,index)=>sum+index**2,0);
    // }
    // let resultEven=computeSumOfSquaresOfEvens([1,2,3,4]);
    // console.log(resultEven);
    
    function computeSumOfSquaresOfEvensOnly(arr) {
          return arr.filter((element) => element % 2 == 0) .map((element) => element * element) .reduce((sum, current) => sum + current, 0);
        }
    let resultEven=computeSumOfSquaresOfEvensOnly([1,2,3,4]);
    console.log(resultEven);


//number- 11

function sum(array){
    return array.reduce((sum,index)=>sum+index,0);
}
function multipty(array){
    return array.reduce((product,index)=>product*index,1);
}


let resultSum=sum([2,3,4]);
let resultMultiply=multipty([2,3,4]);

console.log(resultSum);
console.log(resultMultiply);


//number- 12
function printFibo(n, a, b) {
    let fib = [a, b];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.join(", "));
}
  printFibo(6,0,1);
