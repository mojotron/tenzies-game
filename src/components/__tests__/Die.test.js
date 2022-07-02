import { render, screen } from "@testing-library/react";
import Die from "../Die";

describe("Die component", () => {
  test("renders image", () => {
    render(<Die value={3} filled={false} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
