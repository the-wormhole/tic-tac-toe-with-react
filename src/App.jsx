import { useState } from 'react'
import Button from './components/Button'
import './App.css'
import handleClick from './handlers/handleClick';
import handleReset from './handlers/handleReset';

function App() {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState('X');
  const [winner,setWinner] = useState(undefined);

  return (
    <>
      <div>
        <p id='turn'>
          {`Player ${player} turn...`}
        </p>
      </div>

      <div id='game-container'>
        {board.map((cell,idx) => {
          return <Button role="game-btn"customClass='box-style' textValue={cell} onClick={(event) => handleClick(board,winner,player,setBoard,setPlayer,setWinner,event,idx)} key={idx}/>
        })}
      </div>

      <div>
        {winner && <p id='winner'>{winner === "Draw"?"Match resulted in a draw":`Winner of the game is ${winner}`}</p>}
      </div>

      <div id='footer'>
        <Button customClass='reset-btn' textValue="Reset" onClick={(event) => handleReset(setWinner,setBoard,setPlayer,event)}/>
      </div>
    </>
  )
}

export default App
