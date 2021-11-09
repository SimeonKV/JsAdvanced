function solve(matrix) {
    let matrixOfNumbers = convertValuesToInts(matrix);

    let sumOfFirstDiagonal = sumFirstDiagonal(matrixOfNumbers);
    let sumOfSecondDiagonal = sumSecondDiagonal(matrixOfNumbers);


    if (sumOfFirstDiagonal !== sumOfSecondDiagonal) {
        matrixOfNumbers.forEach(arr => console.log(arr.join(' ')));
    } else {
        let elementValue = sumOfFirstDiagonal;
        let newMatrix = createNewMatrix(matrixOfNumbers, elementValue);
        newMatrix.forEach(arr => console.log(arr.join(' ')));


    }

    function createNewMatrix(matrix, value) {
        outputMatrix = [];

        for (let row = 0; row < matrix.length; row++) {
            let arr = [];
            for (let column = 0; column < matrix[row].length; column++) {

                if (!checkIfPartOfDiagonal(row, column, matrix)) {
                    arr.push(value);
                } else {
                    arr.push(+matrix[row][column]);
                }



            }


            outputMatrix.push(arr);
        }

        return outputMatrix;

    }

    function checkIfPartOfDiagonal(row, col, matrix) {
        let firstDiagonalPoints = collectFirstDiagonalPoints(matrix);
        let secondDiagonalPoints = collectSecondDiagonalPoints(matrix);
        let providedPoint = row + ' ' + col;

        if (firstDiagonalPoints.includes(providedPoint) || secondDiagonalPoints.includes(providedPoint)) {
            return true;
        }


        return false;

    }

    function collectSecondDiagonalPoints(matrix) {
        let length = 0;
        let row = 0;
        let col = matrix.length - 1;
        let diagonalPoints = [];

        while (length < matrix.length) {
            let point = row + ' ' + col;
            diagonalPoints.unshift(point);

            row++;
            col--;
            length++;
        }

        return diagonalPoints;
    }

    function collectFirstDiagonalPoints(matrix) {
        let length = 0;
        let row = 0;
        let col = 0;
        let diagonalPoints = [];

        while (length < matrix.length) {
            let point = row + ' ' + col;
            diagonalPoints.unshift(point);


            row++;
            col++;
            length++;
        }


        return diagonalPoints;
    }

    function convertValuesToInts(matrix) {
        let intsMatrix = [];

        for (let i = 0; i < matrix.length; i++) {
            let arrOfInts = matrix[i].split(' ');
            intsMatrix.push(arrOfInts);
        }


        return intsMatrix;

    }

    function sumSecondDiagonal(matrix) {
        let currentLength = 0;
        let totalSum = 0;
        let column = matrix.length - 1;
        let row = 0;


        while (currentLength < matrix.length) {
            let number = +matrix[row][column];
            totalSum += number;

            row++;
            column--;
            currentLength++;
        }
        return totalSum;
    }

    function sumFirstDiagonal(matrix) {
        let currentLength = 0;
        let totalSum = 0;
        let row = 0;
        let column = 0;



        while (currentLength < matrix.length) {
            let number = +matrix[row][column];
            totalSum += number;

            row++;
            column++;
            currentLength++;
        }

        return totalSum;
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

