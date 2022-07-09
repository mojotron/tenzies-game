import DiceGenerator from "../DiceGenerator";

describe("GenerateDice module", () => {
  test("create single die", () => {
    const generator = DiceGenerator(1, 6);
    const die = generator.createDie();
    expect(die.value).toBeGreaterThanOrEqual(0);
    expect(die.value).toBeLessThanOrEqual(6);
  });
});
