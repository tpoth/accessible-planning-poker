import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Rect App for Scrum Teams to play some rounds Planning Poker.'", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /React App for Scrum Teams to play some rounds Planning Poker./i
  );
  expect(linkElement).toBeInTheDocument();
});
