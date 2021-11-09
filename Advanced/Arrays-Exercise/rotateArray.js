function solve(arr) {
    let numberOfRotations = parseInt(+arr.pop() % arr.length);


    while (numberOfRotations > 0) {

        const lastElement = arr.pop();
        arr.unshift(lastElement);

        numberOfRotations--;
    }


    console.log(arr.join(' '));


}


solve(['1', 
'2', 
'3', 
'4', 
'2']
);