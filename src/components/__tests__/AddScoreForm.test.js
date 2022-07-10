import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddScoreForm from "../AddScoreForm";

describe("AddScoreForm component", () => {
  test("renders form", () => {
    render(<AddScoreForm addNewScore={jest.fn()} />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  test("renders input", () => {
    render(<AddScoreForm addNewScore={jest.fn()} />);
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });
  test("renders button", () => {
    render(<AddScoreForm addNewScore={jest.fn()} />);
    expect(
      screen.getByRole("button", { name: /add score/i })
    ).toBeInTheDocument();
  });
  test("input value change", () => {
    render(<AddScoreForm addNewScore={jest.fn()} />);
    const inputEle = screen.getByPlaceholderText("name");
    userEvent.type(inputEle, "felix");
    expect(inputEle.value).toBe("felix");
  });
});
