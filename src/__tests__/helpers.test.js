import { formatTime, sortHighScore } from "../helpers";

const highScoreRollsMock = [
  { rolls: 5, time: 5000 },
  { rolls: 4, time: 5000 },
  { rolls: 5, time: 5000 },
  { rolls: 8, time: 5000 },
  { rolls: 1, time: 5000 },
];

const highScoreTimesMock = [
  { rolls: 5, time: 2000 },
  { rolls: 5, time: 5000 },
  { rolls: 5, time: 3000 },
  { rolls: 5, time: 7000 },
  { rolls: 5, time: 4000 },
];

describe("format time helper function", () => {
  test("passing value in seconds", () => {
    const time = formatTime(3000);
    expect(time).toBe("00:03");
  });
  test("passing value in minutes and seconds", () => {
    const time = formatTime(66123);
    expect(time).toBe("01:06");
  });
  test("passing value less then hour", () => {
    const time = formatTime(3599999);
    expect(time).toBe("59:59");
  });
  test("passing value equal to hour", () => {
    const time = formatTime(3600000);
    expect(time).toBe("too long");
  });
});

describe("sort high scores", () => {
  test("sort by rolls count", () => {
    const sorted = sortHighScore(highScoreRollsMock);
    expect(sorted).toEqual([
      { rolls: 1, time: 5000 },
      { rolls: 4, time: 5000 },
      { rolls: 5, time: 5000 },
      { rolls: 5, time: 5000 },
      { rolls: 8, time: 5000 },
    ]);
  });
  test("sort by time when rolls are same", () => {
    const sorted = sortHighScore(highScoreTimesMock);
    expect(sorted).toEqual([
      { rolls: 5, time: 2000 },
      { rolls: 5, time: 3000 },
      { rolls: 5, time: 4000 },
      { rolls: 5, time: 5000 },
      { rolls: 5, time: 7000 },
    ]);
  });
});
