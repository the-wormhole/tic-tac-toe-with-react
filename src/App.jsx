import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState('X');
  const [winner,setWinner] = useState(undefined);

  const handleClick = (event,idx) =>{
    event.preventDefault()

    if(board[idx] !== "" || winner){
      return;
    }
    
    let newBoard = structuredClone(board)
    newBoard[idx] = player;
    setBoard(newBoard);

    if(checkWinner(newBoard)){    // Passing the newBoard instead of the 'board' state because 'board' would have an updated value only after the next re-render. This would prevent the game from showing a delayed win
      setWinner(player);
    }else if(newBoard.every(cell => cell !== "")){
      setWinner("Draw")
    }else{
      setPlayer(player === 'X'?'O':'X');
    }

  }


  function checkWinner(board){

    const wins = [
      [0,1,2],[3,4,5],[6,7,8],  // Rowss
      [0,3,6],[1,4,7],[2,5,8],  // Columns
      [0,4,8],[2,4,6] // Diagonals
    ];

    for(const [a,b,c] of wins){
      if(board[a] !== "" && board[a] === board[b] && board[a] === board[c]){
        console.log(`test - ${board}`);
        return true
        // setWinner(player);
        // setBoard(Array(9).fill(""));
        // setPlayer("X");
      }
    }

    return false;
  }

  const handleReset = (event) => {
    event.preventDefault();

    setWinner(undefined);
    setBoard(Array(9).fill(""));
    setPlayer('X');
  }
  return (
    <>
      <div id='game-container'>
        {board.map((cell,idx) => {
          return <Button customClass='box-style' textValue={cell} onClick={(event) => handleClick(event,idx)} key={idx}/>
        })}
      </div>
      <div>
        {winner && <p>{winner === "Draw"?"Match resulted in a draw":`Winner of the game is ${winner}`}</p>}
      </div>
      <div id='header'>
        <Button textValue="Reset" onClick={(event) => handleReset(event)}/>
      </div>
    </>
  )
}

export default App
