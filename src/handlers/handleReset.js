const handleReset = (setWinner,setBoard,setPlayer,event) => {
    event.preventDefault();

    setWinner(undefined);
    setBoard(Array(9).fill(""));
    setPlayer('X');
}

export default handleReset;