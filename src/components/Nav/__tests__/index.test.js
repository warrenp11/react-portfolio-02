import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "projects", description: "Just a few of the projects I've created as a web developer" }
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Test for Link Visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Hi, my name is Peter!");
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });
});