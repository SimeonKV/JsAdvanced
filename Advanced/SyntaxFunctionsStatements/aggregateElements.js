function solve(arr) {

    let sum = 0;
    let inverseSum = 0;

    arr.forEach(element => {
        sum += element;
        let inverseValue = 1 / element;
        inverseSum += inverseValue;
    });


    console.log(sum);
    console.log(inverseSum);
    console.log(arr.join(''));

}

solve([1,2,3])