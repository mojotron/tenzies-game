import { render, screen } from "@testing-library/react";
import LeaderBoard from "../LeaderBoard";

const highScoresDataMock = JSON.stringify([{ rolls: 3, time: 15 }]);

const localStorageMock = {
  getItem: jest.fn(() => highScoresDataMock),
  setItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("LeaderBoard component", () => {
  afterEach(() => jest.clearAllMocks());
  test("renders leader board heading", () => {
    render(<LeaderBoard />);
    expect(screen.getByRole("heading").textContent).toMatch(/leader board/i);
  });
  // test("getting items from local storage", () => {
  //   render(<LeaderBoard />);
  //   expect(screen.getAllByRole("listitem").length).toBe(1);
  // });
});
