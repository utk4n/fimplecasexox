import './App.css';
import { useState, useEffect } from 'react';
import Square from './Component/Square';
import { ConditionalPatterns } from './Component/ConditionalPatterns'
function App() {

  const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("O")
  const [result, setResult] = useState({ winner: "none", state: "none" })

  useEffect(() => {
    checkWinner()
    checkDraw()

    if (player == "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }, [gameBoard])

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished. Winner is ${result.winner}`)
    }
  }, [result])

  const selectSquare = (indexNum) => {
    setGameBoard(gameBoard.map((box, index) => {

      if (index == indexNum && box == "") {
        return player;
      }
      return box;
    })
    )
  }

  const checkWinner = () => {
    ConditionalPatterns.forEach(pattern => {
      const firstP = gameBoard[pattern[0]];
      if (firstP == "") {
        return;
      }
      let foundWinning = true;
      pattern.forEach(index => {
        if (gameBoard[index] != firstP) {
          foundWinning = false;
        }
      })
      if (foundWinning) {
        setResult({ winner: player, state: 'won' })
      }
    })
  }

  const checkDraw = () => {
    let filled = true;
    gameBoard.forEach((box) => {
      if (box == "") {
        filled = false
      }
    })
    if (filled) {
      setResult({ winner: "No one", state: "Draw" })
    }
  }

  return (
    <div className="App">
      
      <Square value={gameBoard[0]} selectSquare={() => selectSquare(0)} />
      <Square value={gameBoard[1]} selectSquare={() => selectSquare(1)} />
      <Square value={gameBoard[2]} selectSquare={() => selectSquare(2)} />
      <Square value={gameBoard[3]} selectSquare={() => selectSquare(3)} />
      <Square value={gameBoard[4]} selectSquare={() => selectSquare(4)} />
      <Square value={gameBoard[5]} selectSquare={() => selectSquare(5)} />
      <Square value={gameBoard[6]} selectSquare={() => selectSquare(6)} />
      <Square value={gameBoard[7]} selectSquare={() => selectSquare(7)} />
      <Square value={gameBoard[8]} selectSquare={() => selectSquare(8)} />

    </div>
  );
}

export default App;
