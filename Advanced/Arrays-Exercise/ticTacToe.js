function solve(moves) {
    let dashBoard = fillDashboard();
    let playerOneTurn = true;
    let playerTwoTurn = false;


    while (moves.length > 0) {
        let coordinates = moves.shift().split(' ');

        if (playerOneTurn) {
            const playerOneFigure = 'X';

            if (makeMove(coordinates, playerOneFigure, dashBoard)) {

                if (checkWinner(coordinates, playerOneFigure, dashBoard)) {
                    console.log(`Player ${playerOneFigure} wins!`);
                    printDashboard(dashBoard);
                    return;
                }

                playerTwoTurn = true;
                playerOneTurn = false;
                continue;
            }
        }


        if (playerTwoTurn) {
            const playerTwoFigure = 'O';

            if (makeMove(coordinates, playerTwoFigure, dashBoard)) {

                if (checkWinner(coordinates, playerTwoFigure, dashBoard)) {
                    console.log(`Player ${playerTwoFigure} wins!`);
                    printDashboard(dashBoard);
                    return;
                }
                playerTwoTurn = false;
                playerOneTurn = true;
            }
        }

    }

    console.log('The game ended! Nobody wins :(');
    printDashboard(dashBoard);

    function checkWinner(player, playerFigure, dashBoard) {
        let row = parseInt(player[0]);
        let col = parseInt(player[1]);


        if (checkRow(row, dashBoard, playerFigure)) {

            return true;
        }

        if (checkCol(col, dashBoard, playerFigure)) {
            return true;
        }


        if (checkDiagonalOne(row, col, dashBoard, playerFigure)) {

            return true;
        }

        if (checkDiagonalTwo(row, col, dashBoard, playerFigure)) {
            return true;
        }




        return false;
    }


    function makeMove(playerCoordinates, playerFigure, dashBoard) {
        let row = parseInt(playerCoordinates[0]);
        let col = parseInt(playerCoordinates[1]);

        if (validateCoordinates(row, col, dashBoard)) {

            if (checkIfCellEmpty(row, col, dashBoard)) {
                dashBoard[row][col] = playerFigure;
                return true;
            } else {
                console.log('This place is already taken. Please choose another!');
            }


        }

        return false;

    }

    function checkRow(row, dashBoard, playerFigure) {
        let wins = true;
        let dashBoardRow = dashBoard[row];

        for (let i = 0; i < dashBoardRow.length; i++) {
            let figure = dashBoardRow[i];

            if (figure !== playerFigure) {
                wins = false;
                break;
            }

        }


        return wins;

    }


    function checkCol(col, dashBoard, playerFigure) {
        let wins = true;

        for (let i = 0; i < dashBoard.length; i++) {
            let figure = dashBoard[i][col];

            if (figure !== playerFigure) {
                wins = false;
                break;
            }


        }

        return wins;
    }


    function checkDiagonalOne(row, col, dashBoard, playerFigure) {
        let coordinates = [
            [0, 0],
            [1, 1],
            [2, 2]
        ];
        let match = coordinatesMatcher(coordinates, row, col);

        let valueOne = dashBoard[0][0];
        let valueTwo = dashBoard[1][1];
        let valueThree = dashBoard[2][2];


        if (match) {
            if (valueOne === playerFigure && valueTwo === playerFigure && valueThree === playerFigure) {
                return true;
            }
        }


        return false;
    }

    function checkDiagonalTwo(row, col, dashBoard, playerFigure) {
        let coordinates = [
            [0, 2],
            [1, 1],
            [2, 0]
        ];
        let match = coordinatesMatcher(coordinates, row, col);

        let valueOne = dashBoard[0][2];
        let valueTwo = dashBoard[1][1];
        let valueThree = dashBoard[2][0];

        if (match) {
            if (valueOne === playerFigure && valueTwo === playerFigure && valueThree === playerFigure) {
                return true;
            }
        }


        return false;



    }

    function coordinatesMatcher(coordinates, row, col) {
        let match = false;


        for (let i = 0; i < coordinates.length; i++) {
            let coordinateRow = coordinates[i][0];
            let coordinateCol = coordinates[i][1];

            if (coordinateRow === row && coordinateCol === col) {
                return true;
            }
        }


        return false;
    }


    function checkIfCellEmpty(row, column, dashBoard) {
        return dashBoard[row][column] === 'false';
    }

    function validateCoordinates(row, column, dashBoard) {

        let rowValidation = row >= 0 && row < dashBoard.length;
        let columnValidation = column >= 0 && column < dashBoard[row].length;

        return rowValidation && columnValidation;
    }

    function fillDashboard() {
        let matrix = [];

        for (let i = 1; i <= 3; i++) {
            let row = ['false', 'false', 'false'];
            matrix.push(row);

        }


        return matrix;
    }

    function printDashboard(dashBoard) {

        dashBoard.forEach(arr => console.log(arr.join('\t')));


    }

}


solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);