import { useEffect, useState } from "react";
import "../styles/LeaderBoard.css";
import AddScoreForm from "./AddScoreForm";

const LeaderBoard = (props) => {
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("tenzies-high-score")) || []
  );

  const [addScore, setAddScore] = useState(false);

  useEffect(() => {
    if (!props.data.gameOver) return;
    if (highScores.length < 10) {
      setAddScore(true);
    }
    // const scoreToChange = highScores.find(
    //   (score) =>
    //     score.rolls === props.data.rolls &&
    //     score.time > props.data.endTime - props.data.startTime
    // );
  }, []);

  const updateHighScore = () => {};

  const addNewScore = (name) => {
    console.log(name);
    const newScore = {
      name,
      rolls: props.data.rolls,
      time: props.data.endTime - props.data.startTime,
    };
    console.log(newScore);
  };

  useEffect(() => {
    localStorage.setItem("tenzies-high-score", JSON.stringify(highScores));
  }, [highScores]);

  const scoreElements = highScores.map((score) => <li>{score.rolls}</li>);
  return (
    <section className="LeaderBoard">
      <h2 className="LeaderBoard__heading">Leader Board</h2>
      {addScore && <AddScoreForm addNewScore={addNewScore} />}
      <ul className="LeaderBoard__list">{scoreElements}</ul>
    </section>
  );
};

export default LeaderBoard;
