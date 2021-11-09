function solve(matrix) {
    let set = new Set();

    matrix.forEach(array => set.add(sumArray(array)));

    if (set.size === 1) {
        console.log('true')
    } else {
        console.log('false');
    }


    function sumArray(arr) {
        let res = 0;

        arr.forEach(element => res += element);

        return res;
    }

}


solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );