import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Article from "../components/Article";

test("renders an h3 with the title", () => {
  render(
    <Article
      title="Test Title"
      date="January 1, 2024"
      preview="Test preview"
      minutesToRead={5}
    />,
  );

  const titleElement = screen.getByRole("heading", { level: 3 });
  expect(titleElement).toHaveTextContent("Test Title");
});

test("renders the date and minutes to read", () => {
  render(
    <Article
      title="Test Title"
      date="January 1, 2024"
      preview="Test preview"
      minutesToRead={5}
    />,
  );

  expect(screen.getByText("January 1, 2024 • 5 min read")).toBeInTheDocument();
});

test("renders the preview text", () => {
  render(
    <Article
      title="Test Title"
      date="January 1, 2024"
      preview="Test preview"
      minutesToRead={5}
    />,
  );

  expect(screen.getByText("Test preview")).toBeInTheDocument();
});

test("uses default date when no date is provided", () => {
  render(
    <Article title="Test Title" preview="Test preview" minutesToRead={5} />,
  );

  expect(screen.getByText(/January 1, 2024/)).toBeInTheDocument();
  expect(screen.getByText(/5 min read/)).toBeInTheDocument();
});
