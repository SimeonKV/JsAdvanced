function solve(arr) {
    let obj = new Object();


    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = arr[i + 1];

        obj[product] = +calories;

    }


    console.log(obj);





}


solve();