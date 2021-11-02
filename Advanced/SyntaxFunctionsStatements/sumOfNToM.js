function solve(stringN, stringM) {
    let sum = 0;


    for (let i = +stringN; i <= +stringM; i++) {
        sum += i;
    }


    console.log(sum);

}


solve('-8','20')