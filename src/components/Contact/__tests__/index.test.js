import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
    it("renders", () => {
        render(<Contact />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("h1 title match", () => {
        const { getByTestId } = render(<Contact currentCategory={Contact} />);
        expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
    });
});