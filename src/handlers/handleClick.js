const handleClick = (board,winner,player,setBoard,setPlayer,setWinner,event,idx) =>{
    event.preventDefault()

    if(board[idx] !== "" || winner){
      return;
    }
    
    let newBoard = structuredClone(board)
    newBoard[idx] = player;
    setBoard(newBoard);

    if(checkWinner(newBoard)){    // Passing the newBoard instead of the 'board' state because 'board' would have an updated value only after the next re-render and isn't available at the present instance. This would prevent the game from showing a delayed win
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
        return true;
      }
    }

    return false;
  }

export default handleClick;