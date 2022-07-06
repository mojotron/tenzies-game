import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("tenzies-high-score")) || []
  );

  const updateHighScore = () => {};

  useEffect(() => {
    localStorage.setItem("tenzies-high-score", JSON.stringify(highScores));
  }, [highScores]);

  const scoreElements = highScores.map((score) => <li>{score.rolls}</li>);
  return (
    <section className="LeaderBoard">
      <h2 className="LeaderBoard__heading">Leader Board</h2>
      <ul className="LeaderBoard__list">{scoreElements}</ul>
    </section>
  );
};

export default LeaderBoard;
