function solve(arr) {
    let resArr = [];


    arr.forEach((element) => {

        if (element < 0) {
           resArr.unshift(element);
        } else {
           resArr.push(element);
        }
    });


    console.log(resArr.join('\n'));
}


solve([3,-2,0,-1]);