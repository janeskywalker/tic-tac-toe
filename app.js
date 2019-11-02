console.log('tic-tac-toe time!')

class Game {
    constructor() {
        this.turn = 'playerOne'
        // make a gameboard
        this.gameBoard = new GameBoard()
    }

    startGame() {
        // reset 
    }
    
    playTurn(r, c) {
        // play a turn, depending on whose turn
        if(this.turn === 'playerOne') {
            this.gameBoard.playSpot(r, c, 1)
        }
        else {
            this.gameBoard.playSpot(r, c, -1)
        }

        // switch Turn
        this.switchTurn()
    }

    switchTurn() {
        if(this.turn === "playerOne") {
            this.turn = "playerTwo"
        } else {
            this.turn = "playerOne"
        }
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

    isSpotValid(r, c) {
        console.log('checking if spot valid')

        // check if spot valid
        return this.gameBoard[r][c] === 0
    }

    playSpot(r, c, z) {
        // check if spot is valid
        console.log('playing spot')
        if(this.isSpotValid(r, c, z)){
            // play the spot
            this.gameBoard[r][c] = z
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
game.playTurn(0, 2)
game.playTurn(1, 1)
game.playTurn(1, 2)