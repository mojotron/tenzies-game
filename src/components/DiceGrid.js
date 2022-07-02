import Die from "./Die";
import "../styles/DiceGrid.css";

const DiceGrid = (props) => {
  const diceElements = props.dice.map((die) => (
    <Die key={die.id} value={die.value} filled={die.filled} />
  ));

  return <section className="DiceGrid">{diceElements}</section>;
};

export default DiceGrid;
