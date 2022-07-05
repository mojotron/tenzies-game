import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("header snapshot", () => {
    const { component } = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
