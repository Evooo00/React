import React, { useState } from 'react'
import Board from './Board'
import { winnerCalculator } from './WinnerCalculator';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = winnerCalculator(board);

    const handleClick = i => {
        const copyOfTheBoard = [...board];

        if(winner || copyOfTheBoard[i]){
            return
        }

        copyOfTheBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(copyOfTheBoard);
        setXisNext(!xIsNext);
    }

    

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
            </div>
        </>
            
    )
}

export default Game