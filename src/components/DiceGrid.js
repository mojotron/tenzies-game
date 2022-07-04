import Die from "./Die";
import "../styles/DiceGrid.css";

const DiceGrid = (props) => {
  const diceElements = props.dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHold={die.isHold}
      holdDice={() => props.holdDice(die.id)}
    />
  ));

  return <section className="DiceGrid">{diceElements}</section>;
};

export default DiceGrid;
