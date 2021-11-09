function solve(arr) {
    let n = parseInt(arr.pop());

    for (let i = 0; i < arr.length; i += n) {
        console.log(arr[i]);
    }

}


solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2'
]);