function solve(arr) {
    let outputArr = [];

    arr.reduce((biggestNumber, currentValue) => {
        if (currentValue >= biggestNumber) {
            biggestNumber = currentValue;
            outputArr.push(currentValue);
        }

        return biggestNumber;
    }, 0);


    
    for(let i = 0; i < outputArr.length; i++){
        console.log(outputArr[i]);
    }


}


solve([2,2]

    );