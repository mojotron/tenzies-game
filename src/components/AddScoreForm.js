import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        maxLength={10}
        minLength={3}
        placeholder="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <button className="btn small">Add score</button>
    </form>
  );
};

export default AddScoreForm;
