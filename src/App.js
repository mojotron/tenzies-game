import { useEffect, useState } from "react";
import DiceGrid from "./components/DiceGrid";
import { generateArray, generateRandomNumber } from "./helpers";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const [diceArr, setDiceArr] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const generateNum1to6Inclusive = generateRandomNumber.bind(null, 1, 6);

  const crateNewDiceArr = () => {
    const newDiceArr = generateArray(10, generateNum1to6Inclusive).map(
      (num) => ({ id: nanoid(), value: num, isHold: false })
    );
    setDiceArr(newDiceArr);
  };

  useEffect(() => {
    crateNewDiceArr();
  }, []);

  useEffect(() => {
    if (diceArr.length < 1) return;
    const dieValue = diceArr[0].value;
    const gameWon = diceArr.every(
      (die) => die.value === dieValue && die.isHold
    );
    if (gameWon) {
      setGameOver(true);
      console.log("Game OVER");
    }
  }, [diceArr]);

  const holdDice = (id) => {
    setDiceArr((oldDiceArr) =>
      oldDiceArr.map((die) =>
        die.id === id ? { ...die, isHold: !die.isHold } : die
      )
    );
  };

  const roll = () => {
    setDiceArr((oldDiceArr) => {
      return oldDiceArr.map((die) => {
        if (!die.isHold)
          return {
            id: nanoid(),
            value: generateNum1to6Inclusive(),
            isHold: false,
          };
        return die;
      });
    });
  };

  const newGame = () => {
    setGameOver(false);
    crateNewDiceArr();
  };

  return (
    <div className="App">
      {gameOver && <Confetti />}
      <DiceGrid dice={diceArr} holdDice={holdDice} />

      {gameOver ? (
        <button type="button" onClick={newGame}>
          New Game
        </button>
      ) : (
        <button type="button" onClick={roll}>
          Roll
        </button>
      )}
    </div>
  );
};

export default App;
