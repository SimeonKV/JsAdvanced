function solve(arr){

let smallestTwoNumbers = arr
.sort((numOne,numTwo) => numOne - numTwo)
.slice(0,2);

console.log(smallestTwoNumbers.join(' '));


}

solve([56,1,45,-56]);