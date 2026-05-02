import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

test("renders an img with the correct src and alt", () => {
  render(<About image="https://via.placeholder.com/150" about="About me" />);

  const imgElement = screen.getByAltText("blog logo");
  expect(imgElement).toHaveAttribute("src", "https://via.placeholder.com/150");
});

test("renders a p with the about text", () => {
  render(<About image="https://via.placeholder.com/150" about="About me" />);

  const pElement = screen.getByText("About me");
  expect(pElement).toBeInTheDocument();
});
