import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Test Post 1",
    date: "January 1, 2024",
    preview: "Preview 1",
    minutesToRead: 5,
  },
  {
    id: 2,
    title: "Test Post 2",
    date: "January 2, 2024",
    preview: "Preview 2",
    minutesToRead: 7,
  },
];

test("renders a main element", () => {
  render(<ArticleList posts={posts} />);

  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});

test("renders an Article component for each post", () => {
  render(<ArticleList posts={posts} />);

  expect(screen.getByText("Test Post 1")).toBeInTheDocument();
  expect(screen.getByText("Test Post 2")).toBeInTheDocument();
});
