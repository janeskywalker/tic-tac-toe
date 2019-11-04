console.log('tic-tac-toe time!')

const GameState = {
    PLAYER_ONE_WIN: 1,
    PLAYER_TWO_WIN: 2,
    TIE: 3,
    INVALID_MOVE: 4,
    CONTINUE: 5,
};

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
        let gameState
        // play a turn, depending on whose turn
        if(this.turn === 'playerOne') {
            console.log('playerOne\'s turn')
            gameState = this.gameBoard.playSpot(r, c, 1)
        }
        else {
            console.log('playerTwo\'s turn')
            gameState = this.gameBoard.playSpot(r, c, -1)
            console.log({gameState})
        }

  
        switch (gameState) {
            case GameState.PLAYER_ONE_WIN:
                console.log('Player I won')
                break;
            case GameState.PLAYER_TWO_WIN:
                console.log('Player II won')
                break;
            case GameState.TIE:
                console.log('It a tie')
                break;
            case GameState.INVALID_MOVE:
                console.log('Invalid spot')
                break;
            case GameState.CONTINUE:
                console.log('Continue')

        }

        // switch Turn when board is no winner or board not full // depends on state of the game 
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

    // Returns new game state to Game
    playSpot(r, c, z) {
        // check if spot is valid, not taken
        console.log('playing spot')
        if(this.isSpotValid(r, c)){
            // play the spot
            this.gameBoard[r][c] = z
            console.log(this.gameBoard)
            // determin winner
            const winner = this.determinWinner()
            if (winner === undefined) {
                return GameState.CONTINUE
            } else {
                console.log({winner})
                return winner
            }
        }
        // not invalid move, spot taken
        else{
            return GameState.INVALID_MOVE
        }
    }


    // check vertial wins
    _checkColumnWin() {
        let sum = 0
        const numColumns = this.gameBoard[0].length

        for (let i = 0; i < numColumns; i++) {
            for(const row of this.gameBoard) {
                sum = sum + row[i]
            }
            if(sum === 3) {
                return "playerOne won"
            } else if(sum === -3) {
                return "playerTwo won"
            } else {
                sum = 0
            }
        }
    }

    // check horizontal wins
    _checkRowWin() {
        let sum = 0
        for(const row of this.gameBoard) {
            sum = row.reduce((acc, cur) => acc + cur, sum)

            if(sum === 3) {
                return "playerOne won"
            } else if(sum === -3) {
                return "playerTwo won"
            } else {
                sum = 0
            }
        } 
    }

    // diagonal win
    _checkDiagonalWin(){
        
        console.log('checking diaglonal win')

        const numColumns = this.gameBoard[0].length
        const numRows = this.gameBoard[0].length

        // from top left
        let sum = 0
        for(let i=0; i<numColumns; i++){
            sum = sum + this.gameBoard[i][i]
            console.log({i}, {sum})
        }

        if(sum === 3) {
            return "playerOne won"
        } else if(sum === -3) {
            return "playerTwo won"
        } else {
            sum = 0
        }
        console.log('checking diagonal win from top left sum:', sum)


        //from botton left
        for(let i=0; i<numColumns; i++){
            sum = sum + this.gameBoard[numRows - 1 - i][i]
        }

        if(sum === 3) {
            return "playerOne won" // GameState.PLAYER_ONE_WIN
        } else if(sum === -3) {
            return "playerTwo won"
        } else {
            sum = 0
        }

    }

    determinWinner() {
        console.log('determing winner')
        let winner = this._checkColumnWin()
        if(winner === undefined) {
            winner = this._checkRowWin()
        } 
        if(winner === undefined) {
            winner = this._checkDiagonalWin()
        }

        console.log({winner})

        if(winner === "playerOne won") {
            return GameState.PLAYER_ONE_WIN
        }

        if(winner === "playerTwo won") {
            return GameState.PLAYER_TWO_WIN
        }

    }
}

const game = new Game()
// console.log(game)
// console.log(game.gameBoard)


// playerOne dia win from top left
// game.playTurn(0, 0)
// game.playTurn(0, 1)
// game.playTurn(1, 1)
// game.playTurn(0, 2)
// game.playTurn(2, 2)
// game.playTurn(2, 0)

// playerTwo dia win from bottom left
game.playTurn(0, 0)
game.playTurn(1, 1)
game.playTurn(0, 1)
game.playTurn(0, 2)
game.playTurn(2, 2)
game.playTurn(2, 0)
