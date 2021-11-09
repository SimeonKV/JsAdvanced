function solve(arr) {

    let resultArray = arr.reduce((accumulator, currentValue, index) => {
        if (currentValue === 'add') {
            accumulator.push(index + 1);
        } else {
            accumulator.pop();
        }

        return accumulator;
    }, [])


    if (resultArray.length === 0) {
        console.log('Empty');
        return;
    }


    resultArray.forEach(element => console.log(element));

}

solve(['add',
    'add',
    'add',
    'add'
]);


solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);

solve(['remove', 
'remove', 
'remove']
);