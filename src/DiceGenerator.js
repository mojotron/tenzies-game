import uniqid from "uniqid";

const GenerateDice = (min, max) => {
  // generate number
  const _generateRandomNumber = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // create die object
  const _createDiceObject = () => {
    return {
      id: uniqid(),
      value: _generateRandomNumber(),
      isHold: false,
    };
  };
  // create single die (public API)
  const createDie = () => {
    return _createDiceObject();
  };
  // generate array (public API)
  const createDice = (arrLength) => {
    return Array.from({ length: arrLength }, () => _createDiceObject());
  };

  return { createDie, createDice };
};

export default GenerateDice;
