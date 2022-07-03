export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateArray = (length, cb) => {
  if (!cb) return Array.from({ length: length });
  return Array.from({ length: length }, () => cb());
};
