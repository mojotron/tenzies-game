import images from "../images/diceImages";
import "../styles/Die.css";

const Die = (props) => {
  return (
    <div className="Die">
      <img
        className="Die__img"
        src={images[`dice${props.value}${props.filled ? "filled" : ""}`]}
        alt={`die displaying number ${props.value}`}
      />
    </div>
  );
};

export default Die;
