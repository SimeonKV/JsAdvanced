function solve(stringInput) {
    let arr = stringInput.split(/[^A-Za-z]/);
    console.log();
    console.log(arr.filter(element => element !== '').map(element => element.toUpperCase()).join(', '));



}


solve('hello');