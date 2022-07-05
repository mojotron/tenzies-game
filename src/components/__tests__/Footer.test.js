import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("footer snapshot", () => {
    const { component } = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
