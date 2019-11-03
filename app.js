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
            console.log('playerOne\'s turn')
            this.gameBoard.playSpot(r, c, 1)
        }
        else {
            console.log('playerTwo\'s turn')
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
        this.winner = null
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
        if(this.isSpotValid(r, c)){
            // play the spot
            this.gameBoard[r][c] = z
        }
        else{
            console.log('invalid spot')
        }
        console.log(this.gameBoard)
        
        // determin winner
        this.determinWinner()
    }

    determinWinner() {
        // vertical wins
        if(this.gameBoard[0][0] + this.gameBoard[0][1] + this.gameBoard[0][2] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[0][0] + this.gameBoard[0][1] + this.gameBoard[0][2] === -3) {
            this.winner = "playerTwo won"
        }
        else if(this.gameBoard[1][0] + this.gameBoard[1][1] + this.gameBoard[1][2] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[1][0] + this.gameBoard[1][1] + this.gameBoard[1][2] === -3) {
            this.winner = "playerTwo won"
        } else if(this.gameBoard[2][0] + this.gameBoard[2][1] + this.gameBoard[2][2] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[2][0] + this.gameBoard[2][1] + this.gameBoard[2][2] === -3) {
            this.winner = "playerTwo won"
        } 
        
        // horizontal wins
        else if(this.gameBoard[0][0] + this.gameBoard[1][0] + this.gameBoard[2][0] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[0][0] + this.gameBoard[1][0] + this.gameBoard[2][0] === -3) {
            this.winner = "playerTwo won"
        } else if(this.gameBoard[0][1] + this.gameBoard[1][1] + this.gameBoard[2][1] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[0][1] + this.gameBoard[1][1] + this.gameBoard[2][1] === -3) {
            this.winner = "playerTwo won"
        } else if(this.gameBoard[0][2] + this.gameBoard[1][2] + this.gameBoard[2][2] === 3) {
            this.winner = "playerOne won"
        }else if(this.gameBoard[0][2] + this.gameBoard[1][2] + this.gameBoard[2][2] === -3) {
            this.winner = "playerTwo won"
        }

        //diagonal wins
        else if(this.gameBoard[0][0] + this.gameBoard[1][1] + this.gameBoard[2][2] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[0][0] + this.gameBoard[1][1] + this.gameBoard[2][2] === -3) {
            this.winner = "playerTwo won"
        } else if(this.gameBoard[0][2] + this.gameBoard[1][1] + this.gameBoard[2][0] === 3) {
            this.winner = "playerOne won"
        } else if(this.gameBoard[0][2] + this.gameBoard[1][1] + this.gameBoard[2][0] === -3) {
            this.winner = "playerTwo won"
        } else{
            console.log('no winner, keep playing')
        }

        console.log(this.winner)
        // clear board and stop the play
    }
}

const game = new Game()
// console.log(game)
// console.log(game.gameBoard)

game.playTurn(0, 0)
game.playTurn(0, 1)
game.playTurn(1, 1)
game.playTurn(0, 2)
game.playTurn(2, 2)
game.playTurn(2, 0)
game.playTurn(0, 1)