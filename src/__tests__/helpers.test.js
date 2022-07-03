import { generateArray, generateRandomNumber } from "../helpers";

describe("generate random number helper function", () => {
  test("create value between min and max", () => {
    expect(generateRandomNumber(1, 3)).toBeGreaterThanOrEqual(1);
    expect(generateRandomNumber(1, 3)).toBeLessThanOrEqual(3);
  });
  test("generate same number if min and max are equal", () => {
    expect(generateRandomNumber(1, 1)).toBe(1);
    expect(generateRandomNumber(10, 10)).toBe(10);
    expect(generateRandomNumber(100, 100)).toBe(100);
  });
});

describe("generate array helper function", () => {
  test("returns array of length equal to length arg", () => {
    const length = 5;
    expect(generateArray(length).length).toBe(5);
  });
  test("returns array of undefined values if callback is not passed as 2nd arg", () => {
    const arr = generateArray(3);
    expect(arr[0]).toBe(undefined);
    expect(arr[1]).toBe(undefined);
    expect(arr[2]).toBe(undefined);
  });
  test("map over array if callback is passed", () => {
    const arrOfTrues = generateArray(3, () => true);
    const condition = arrOfTrues.every((ele) => ele === true);
    expect(condition).toBe(true);
  });
  test("generate array of random numbers if generateRandom number is passed as second arg", () => {
    const dieNumber = generateRandomNumber.bind(null, 1, 6);
    const arrOfDice = generateArray(10, dieNumber);
    const condition = arrOfDice.every((ele) => ele > 0 && ele < 7);
    expect(condition).toBe(true);
  });
});
