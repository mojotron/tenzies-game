import { useEffect, useState } from "react";
import "./styles/App.css";
import Confetti from "react-confetti";
import DiceGrid from "./components/DiceGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeaderBoard from "./components/LeaderBoard";
import GenerateDice from "./DiceGenerator";

const App = () => {
  const [game, setGame] = useState({ gameOver: false, gameRunning: false });
  const [diceArr, setDiceArr] = useState([]);
  const [rolls, setRolls] = useState(0);
  const [showLeaderBoard, setShowLeaderBoard] = useState(true);

  const diceGenerator = GenerateDice(1, 6);

  const initNewGame = () => {
    setGame({
      gameRunning: true,
      gameOver: false,
      startTime: Date.now(),
      endTime: null,
    });
    setDiceArr(diceGenerator.createDice(10));
    setShowLeaderBoard(false);
    setRolls(0);
  };

  useEffect(() => {
    if (diceArr.length < 1) return;
    const dieValue = diceArr[0].value;
    const gameWon = diceArr.every(
      (die) => die.value === dieValue && die.isHold
    );
    if (gameWon) {
      setGame((oldGame) => ({
        ...oldGame,
        gameRunning: false,
        gameOver: true,
        endTime: Date.now(),
      }));
      setShowLeaderBoard(true);
    }
  }, [diceArr]);

  const holdDice = (id) => {
    // map over diceArr and change clicked die isHold flag
    setDiceArr((oldDiceArr) =>
      oldDiceArr.map((die) =>
        die.id === id ? { ...die, isHold: !die.isHold } : die
      )
    );
  };

  const roll = () => {
    // map over diceArr and create new die for each die with isHold flag value of false
    setDiceArr((oldDiceArr) =>
      oldDiceArr.map((die) => (!die.isHold ? diceGenerator.createDie() : die))
    );
    setRolls((oldRolls) => oldRolls + 1);
  };

  return (
    <div className="App">
      {game.gameOver && <Confetti height={document.body.scrollHeight} />}
      <Header />
      <DiceGrid dice={diceArr} holdDice={holdDice} />

      {!game.gameRunning && (
        <button className="btn" type="button" onClick={initNewGame}>
          New Game
        </button>
      )}

      {game.gameRunning && (
        <button className="btn" type="button" onClick={roll}>
          Roll
        </button>
      )}

      {showLeaderBoard && <LeaderBoard data={{ ...game, rolls }} />}

      <Footer />
    </div>
  );
};

export default App;
