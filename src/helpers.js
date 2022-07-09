export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateArray = (length, cb) => {
  if (!cb) return Array.from({ length: length });
  return Array.from({ length: length }, () => cb());
};

const createDiceArray = (length) => {};

export const formatTime = (ms) => {
  const options = {
    minute: "numeric",
    second: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en", options);
  return formatter.format(ms);
};
