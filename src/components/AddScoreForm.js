import { useState } from "react";
import "../styles/AddScoreForm.css";

const AddScoreForm = (props) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewScore(name);
  };

  return (
    <form
      aria-label="form"
      onSubmit={handleSubmit}
      className="AddScoreForm small"
    >
      <input
        className="AddScoreForm__input"
        maxLength={10}
        minLength={3}
        placeholder="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <button className="btn">Add score</button>
    </form>
  );
};

export default AddScoreForm;
