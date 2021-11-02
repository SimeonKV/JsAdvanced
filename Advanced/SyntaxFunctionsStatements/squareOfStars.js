function solve(inputNumber) {

    for (let i = 0; i < inputNumber; i++) {
        let output = '';
        for (let j = 0; j < inputNumber; j++) {
               output += '* ';
        }

        console.log(output.trim());
    }


}

solve(4);