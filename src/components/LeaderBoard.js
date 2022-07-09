import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "../styles/LeaderBoard.css";
import AddScoreForm from "./AddScoreForm";
import { formatTime } from "../helpers";

const LeaderBoard = (props) => {
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("tenzies-high-score")) || []
  );
  const [addScore, setAddScore] = useState(false);
  const [betterScore, setBetterScore] = useState(null);

  useEffect(() => {
    if (!props.data.gameOver) return;
    if (highScores.length < 5) {
      setAddScore(true);
      return;
    }
    const better = highScores.filter((score) => {
      if (score.rolls > props.data.rolls) return true;
      else if (
        score.rolls === props.data.rolls &&
        score.time > props.data.endTime - props.data.startTime
      )
        return true;
      else return false;
    });
    if (better.length > 0) {
      setBetterScore(better[better.length - 1].id);
      setAddScore(true);
      return;
    }
    return;
  }, []);

  const sortScores = (scoreArr) => {
    return scoreArr.sort((a, b) => {
      if (a.rolls > b.rolls) return 1;
      if (a.rolls === b.rolls) {
        if (a.time > b.time) return 1;
        else return -1;
      } else return -1;
    });
  };

  const addNewScore = (name) => {
    console.log(name);
    const newScore = {
      id: nanoid(),
      name,
      rolls: props.data.rolls,
      time: props.data.endTime - props.data.startTime,
    };
    if (betterScore !== null) {
      setHighScores((oldScores) => {
        const temp = oldScores.map((score) => {
          return score.id === betterScore ? newScore : score;
        });
        return sortScores(temp);
      });
    } else {
      setHighScores((oldScores) => sortScores([...oldScores, newScore]));
    }
    setAddScore(false);
    setBetterScore(null);
  };

  useEffect(() => {
    localStorage.setItem("tenzies-high-score", JSON.stringify(highScores));
  }, [highScores]);

  const scoreElements = highScores.map((score, i) => (
    <li
      className={`LeaderBoard__list__item border-${
        i % 2 === 0 ? "even" : "odd"
      }`}
      key={score.id}
    >
      {score.name} / {score.rolls} rolls / time {formatTime(score.time)}
    </li>
  ));

  return (
    <section className="LeaderBoard">
      <h2 className="LeaderBoard__heading">Leader Board</h2>
      {addScore && <AddScoreForm addNewScore={addNewScore} />}
      <ul className="LeaderBoard__list">{scoreElements}</ul>
    </section>
  );
};

export default LeaderBoard;
