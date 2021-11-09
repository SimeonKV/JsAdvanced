function solve(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let col = 0 + row;
        firstDiagonalSum += matrix[row][col];

    }


    for (let row = 0; row < matrix.length; row++) {
        let col = (matrix[row].length - 1) - row;
        secondDiagonalSum += matrix[row][col];

    }


    console.log(firstDiagonalSum,secondDiagonalSum);
    

}


solve([[20, 40],
    [10, 60]]
   );