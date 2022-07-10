import DiceGenerator from "../DiceGenerator";

describe("GenerateDice module", () => {
  test("create single d6 die", () => {
    const generator = DiceGenerator(1, 6);
    const die = generator.createDie();
    expect(die.value).toBeGreaterThanOrEqual(0);
    expect(die.value).toBeLessThanOrEqual(6);
  });

  test("create single d4 die", () => {
    const generator = DiceGenerator(1, 4);
    const die = generator.createDie();
    expect(die.value).toBeGreaterThanOrEqual(0);
    expect(die.value).toBeLessThanOrEqual(4);
  });

  test("single die has right properties", () => {
    const generator = DiceGenerator(1, 6);
    const die = generator.createDie();
    expect(die).toHaveProperty("id");
    expect(die).toHaveProperty("value");
    expect(die).toHaveProperty("isHold");
  });

  test("dice have diff id", () => {
    const generator = DiceGenerator(1, 6);
    const die1 = generator.createDie();
    const die2 = generator.createDie();
    const die3 = generator.createDie();
    expect(die1.id).not.toEqual(die2.id);
    expect(die2.id).not.toEqual(die3.id);
    expect(die3.id).not.toEqual(die1.id);
  });

  test("create array of dice", () => {
    const generator = DiceGenerator(1, 6);
    const dice = generator.createDice(5);
    expect(dice.length).toBe(5);
    expect(dice[0]).toHaveProperty("value");
    expect(dice[0].value).toBeGreaterThanOrEqual(0);
    expect(dice[0].value).toBeLessThanOrEqual(6);
  });
});
