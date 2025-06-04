const gameBoard = (function () {
    const arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    return { arr };
})();


const whenPlayButtonClicked = (function () {
    document.querySelector(".play").addEventListener("click", function prepareGame() {
        const boards = document.querySelectorAll("#game-board > button");
        const players = document.querySelectorAll(".player");

        for (let board of boards) {
            board.removeAttribute("disabled");
            board.className = "board";
        }
        
        for (let player of players ) {
            player.setAttribute("disabled", "disabled");
        }
        displayController();
    })
})();


function displayController() {
    let player1 = createPlayer(document.querySelector('.player1').value, 'x');
    let player2 = createPlayer(document.querySelector('.player2').value, 'o');
    let currentPlayer = player1.name;
    let boardCounter = 0;
    let hasWon = false;
    let winner = document.querySelector(".winner");

    const boards = document.querySelectorAll("#game-board > button");
    for (let board of boards) {
        board.addEventListener("click", () => {
            if (currentPlayer === player1.name && board.innerText === '' && hasWon != true) {
                gameBoard.arr[Number(board.dataset.x)][Number(board.dataset.y)] = player1.mark;
                board.innerText = player1.mark;
                if (checkWin(player1.mark) === 'Win') {
                    hasWon = true;
                    winner.innerText = `WINNER: ${player1.name}`;
                } 
                currentPlayer = player2.name;
                boardCounter++;
            } else if (currentPlayer === player2.name && board.innerText === '' && hasWon != true) {
                gameBoard.arr[Number(board.dataset.x)][Number(board.dataset.y)] = player2.mark;
                board.innerText = player2.mark;
                if (checkWin(player2.mark) === 'Win') {
                    hasWon = true;
                    winner.innerText = `WINNER: ${player2.name}`;
                }
                currentPlayer = player1.name;
                boardCounter++;
            }

            if (hasWon === true || boardCounter === 9 && hasWon != true) {
                playBtn = document.querySelector(".play");
                playBtn.innerText = 'Play Again?';
                playBtn.addEventListener("click", () => {
                    window.location.reload();
                })
            }

            if (boardCounter === 9 && hasWon != true) {
                winner.innerText = 'DRAW';
            }

        })
    }
}

function createPlayer(name, mark) {
    return { name, mark };
}

function checkWin(mark) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard.arr[i][0] === mark &&
            gameBoard.arr[i][1] === mark &&
            gameBoard.arr[i][2] === mark) {
                return 'Win';
            }
        else if (gameBoard.arr[0][i] === mark &&
                 gameBoard.arr[1][i] === mark &&
                 gameBoard.arr[2][i] === mark) {
                    return 'Win';
                 }
    } 

    // Check diagonal
    if (gameBoard.arr[0][0] === mark &&
        gameBoard.arr[1][1] === mark &&
        gameBoard.arr[2][2] === mark) {
            return 'Win';
        }
    else if (gameBoard.arr[0][2] === mark &&
             gameBoard.arr[1][1] === mark &&
             gameBoard.arr[2][0] === mark) {
                return 'Win';
            }
}

