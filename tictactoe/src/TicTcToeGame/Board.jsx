import React, {useState} from "react";
import {Square} from "./square";
export const Board = ()=>{
    const[state, setState] = useState(Array(9).fill(null)) 
    const[isXTurn, setIsXTurn] = useState(true)

    const checkWinner = ()=>{
        const winnerOne = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [2,5,8],
            [1,4,7],
            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winnerOne){
            const[a,b,c] = logic
            if(state[a] !== null && state[a] === state[b] && state[a]===state[c]){
                return state[a]
            }
        }
        
        return false
    }

    const isWinner = checkWinner()

    const handleClick = (index)=>{
        if(state[index] !== null){
            return
        }
        const copyState = [...state]
        copyState[index] = isXTurn ? "0": "x"
        setState(copyState)
        setIsXTurn(!isXTurn)
    }

    const handleReplay = ()=>{
        setState(Array(9).fill(null))
    }
    
    return (
        <div style={{margin:"50px", padding:"50px", width: "30%", height:"30%"}} className="board-container">
        {isWinner ? (<>{isWinner} Won!!!!{" "} 
        <button onClick={handleReplay}>Play Again</button>
        </>) : (
        <>
        <h2>Player {isXTurn ? "0":"x"} please move</h2>
        <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={state[0]}></Square>
                <Square onClick={()=> handleClick(1)}value={state[1]}></Square>
                <Square onClick={()=> handleClick(2)}value={state[2]}></Square>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(3)} value={state[3]}></Square>
                <Square onClick={()=> handleClick(4)} value={state[4]}></Square>
                <Square onClick={()=> handleClick(5)} value={state[5]}></Square>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(6)} value={state[6]}></Square>
                <Square onClick={()=> handleClick(7)} value={state[7]}></Square>
                <Square onClick={()=> handleClick(8)} value={state[8]}></Square>

            </div>
        </>)}
        </div>
    )
}