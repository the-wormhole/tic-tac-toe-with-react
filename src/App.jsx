import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState('X');


  const handleClick = (event,idx) =>{
    event.preventDefault()

    if(board[idx] !== ""){
      alert("Click on an empty box!!");
      return;
    }
    
    let newBoard = structuredClone(board)
    // [...board];
    newBoard[idx] = player;

    checkWinner(newBoard)

    setBoard(newBoard);
    setPlayer(player === 'X'?'O':'X');
  }


  function checkWinner(board){

    const wins = [
      [0,1,2],[3,4,5],[6,7,8],  // Rowss
      [0,3,6],[1,4,7],[2,5,8],  // Columns
      [0,4,8],[2,4,6] // Diagonals
    ];

    // for(const [a,b,c] of wins){
    //   if(board[a] !== "" && board)
    // }
    if(newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2] && newBoard[0] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5] && newBoard[3] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8] && newBoard[6] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6] && newBoard[0] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7] && newBoard[1] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8] && newBoard[2] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8] && newBoard[0] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }else if(newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6] && newBoard[2] !== ""){
      alert(`Player ${player} wins`);
      setBoard(["","","","","","","","",""]);
      setPlayer('X');
      return;
    }
  }

  const handleReset = (event) => {
    event.preventDefault();

    setBoard(["","","","","","","","",""]);
    setPlayer('X');
  }
  return (
    <>
      <div id='header'>
        <Button textValue="Reset" onClick={(event) => handleReset(event)}/>
      </div>
      <div id='game-container'>
        {board.map((cell,idx) => {
          return <Button customClass='box-style' textValue={cell} onClick={(event) => handleClick(event,idx)}/>
        })}
      </div>
    </>
  )
}

export default App
