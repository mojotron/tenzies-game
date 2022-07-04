import { render, screen } from "@testing-library/react";
import DiceGrid from "../DiceGrid";

const diceMock = [
  { id: 0, value: 4, isHold: false },
  { id: 1, value: 1, isHold: true },
  { id: 2, value: 2, isHold: false },
  { id: 3, value: 3, isHold: false },
  { id: 4, value: 4, isHold: true },
  { id: 5, value: 5, isHold: false },
  { id: 6, value: 6, isHold: true },
  { id: 7, value: 1, isHold: true },
  { id: 8, value: 2, isHold: true },
  { id: 9, value: 3, isHold: true },
];

describe("Dice Grid component", () => {
  test("renders 10 dice elements", () => {
    render(<DiceGrid dice={diceMock} />);
    expect(screen.getAllByRole("img").length).toBe(10);
  });
  test("renders 4 non filled dice", () => {
    render(<DiceGrid dice={diceMock} />);
    expect(
      screen.getAllByRole("img").filter((img) => !img.src.includes("filled"))
        .length
    ).toBe(4);
  });
  test("renders 6 filled dice", () => {
    render(<DiceGrid dice={diceMock} />);
    expect(
      screen.getAllByRole("img").filter((img) => img.src.includes("filled"))
        .length
    ).toBe(6);
  });
});
