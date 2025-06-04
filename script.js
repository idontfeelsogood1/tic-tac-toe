const gameBoard = (function () {
    const arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    return { arr };
})();

const displayController = (function () {
    let player1 = createPlayer('idontfeelsogood1', 'x');
    let player2 = createPlayer('idontfeelsogood2', 'o');
    

})();

function createPlayer(name, mark) {
    return { name, mark };
}

function checkWinAndDraw(mark) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard.arr[i][0] &&
            gameBoard.arr[i][1] &&
            gameBoard.arr[i][2] === mark) {
                return 'Win';
            }
        else if (gameBoard.arr[0][i] &&
                 gameBoard.arr[1][i] &&
                 gameBoard.arr[2][i] === mark) {
                    return 'Win';
                 }
    } 

    // Check diagonal
    if (gameBoard.arr[0][0] &&
        gameBoard.arr[1][1] &&
        gameBoard.arr[2][2] === mark) {
            return 'Win';
        }
    else if (gameBoard.arr[0][2] &&
             gameBoard.arr[1][1] &&
             gameBoard.arr[2][0] === mark) {
                return 'Win';
            }
    
    // If none of the above then draw
    return 'Draw';
}

