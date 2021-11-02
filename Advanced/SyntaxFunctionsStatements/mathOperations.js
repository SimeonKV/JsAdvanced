function solve(numOne, numTwo, operator) {


    switch (operator) {

        case '+':
            return console.log(numOne + numTwo);
        case '-':
            return console.log(numOne - numTwo);
        case '*':
            return console.log(numOne * numTwo);
        case '**':
            return console.log(Math.pow(numOne, numTwo));
        case '%':
            return console.log(numOne % numTwo);
        case '/':
            return console.log(numOne / numTwo);
    }

}


solve(5, 6, '+');