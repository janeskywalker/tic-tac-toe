console.log('tic-tac-toe time!')

class Game {
    constructor() {
        this.turn = null
        this.gameBoard = new GameBoard()
    }

    startGame() {
        // reset 
    }
    
    playTurn(x, y) {
        this.gameBoard.playSpot(x, y)
    }

    switchTurn() {

    }
}


class GameBoard {
    constructor() {
        this.gameBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
    }

    // isBoardFull() {

    // }

    isSpotValid(x, y) {
        console.log('checking if spot valid')

        // check if spot valid
        return this.gameBoard[x][y] === 0
    }

    playSpot(x, y) {
        // check if spot is valid
        console.log('playing spot')
        if(this.isSpotValid(x, y)){
            this.gameBoard[x][y] =1
        }
        console.log(this.gameBoard)
    }

    // determinWinner() {
    // }
}

const game = new Game()
console.log(game)
console.log(game.gameBoard)

game.playTurn(0, 1)