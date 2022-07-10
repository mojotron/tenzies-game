export const formatTime = (ms) => {
  if (ms >= 3600000) return "too long";
  const options = {
    minute: "numeric",
    second: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en", options);
  return formatter.format(ms);
};

export const sortHighScore = (highScoreArr) => {
  return highScoreArr.sort((a, b) => {
    if (a.rolls > b.rolls) return 1;
    if (a.rolls === b.rolls) {
      if (a.time > b.time) return 1;
      else return -1;
    } else return -1;
  });
};
