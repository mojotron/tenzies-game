import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LeaderBoard from "../LeaderBoard";

describe("LeaderBoard component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(
          () =>
            '[{"id":"h4VccbSC4Es9KA0uMcd1-","name":"hello","rolls":4,"time":11892},{"id":"NDxSDcN3YAEBp4mkai03o","name":"mojo","rolls":4,"time":92980}]'
        ),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  test("not render form", () => {
    render(<LeaderBoard data={{ gameOver: false }} />);
    expect(() => screen.getByRole("form")).toThrow();
  });
  test("render form", () => {
    render(<LeaderBoard data={{ gameOver: true }} />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  test("load data", () => {
    render(<LeaderBoard data={{ gameOver: false }} />);
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
  test("submit form", () => {
    render(
      <LeaderBoard
        data={{ gameOver: true, rolls: 10, startTime: 5000, endTime: 10000 }}
      />
    );
    const inputElement = screen.getByPlaceholderText("name");
    const button = screen.getByRole("button", { name: "Add score" });
    userEvent.type(inputElement, "Jack");
    userEvent.click(button);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
    expect(listItems[2].textContent).toBe("Jack / 10 rolls / time 00:05");
  });
});
