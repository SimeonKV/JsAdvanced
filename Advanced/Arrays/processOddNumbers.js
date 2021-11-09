function solve(arr){

    let oddNumberProccessed = arr.filter((_,index) => index % 2 !== 0)
    .map(element => element * 2)
    .reverse();

    console.log(oddNumberProccessed.join(' '));


}

solve([10, 15, 20, 25]);