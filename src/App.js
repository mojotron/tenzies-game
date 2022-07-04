import { useEffect, useState } from "react";
import DiceGrid from "./components/DiceGrid";
import { generateArray, generateRandomNumber } from "./helpers";
import { nanoid } from "nanoid";

const App = () => {
  const [diceArr, setDiceArr] = useState([]);

  const crateNewDiceArr = () => {
    const generateNum1to6Inclusive = generateRandomNumber.bind(null, 1, 6);
    const newDiceArr = generateArray(10, generateNum1to6Inclusive).map(
      (num) => ({ id: nanoid(), value: num, filled: false })
    );
    setDiceArr(newDiceArr);
  };

  useEffect(() => {
    crateNewDiceArr();
  }, []);

  return (
    <div className="App">
      <DiceGrid dice={diceArr} />
      <button type="button" onClick={crateNewDiceArr}>
        Roll
      </button>
    </div>
  );
};

export default App;
