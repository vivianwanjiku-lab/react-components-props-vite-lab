import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

test("renders the blog name in an h1", () => {
  render(<Header name="My Personal Blog" />);

  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toHaveTextContent("My Personal Blog");
});
