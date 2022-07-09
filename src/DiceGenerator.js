import { nanoid } from "nanoid";

const GenerateDice = (min, max) => {
  // generate number
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // generate array
  // create new object
  const createDiceObject = () => {
    return {
      id: nanoid(),
      value: generateRandomNumber(),
      isHold: false,
    };
  };

  const createDie = () => {
    return createDiceObject();
  };
  return { createDie };
};

export default GenerateDice;
