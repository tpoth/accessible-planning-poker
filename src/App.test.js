import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Rect App for Scrum Teams to play some rounds Planning Poker./i
  );
  expect(linkElement).toBeInTheDocument();
});
