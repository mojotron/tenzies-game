import { render, screen } from "@testing-library/react";
import Die from "../Die";

describe("Die component", () => {
  test("renders image", () => {
    render(<Die value={3} isHold={false} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("img element has correct class name", () => {
    render(<Die value={4} isHold={false} />);
    expect(screen.getByRole("img").className).toBe("Die__img");
  });
  test("filled prop with value false renders non filled img", () => {
    render(<Die value={4} isHold={false} />);
    expect(screen.getByRole("img").src).toMatch(/dice-4\.svg$/);
  });
  test("filled prop with value true renders filled img", () => {
    render(<Die value={5} isHold={true} />);
    expect(screen.getByRole("img").src).toMatch(/dice-5-filled\.svg$/);
  });
});
