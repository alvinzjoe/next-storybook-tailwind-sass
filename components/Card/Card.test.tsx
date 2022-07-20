import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./card";

describe('Card component', () => {
    it("render label", () => {
        render(<Card label="Card Title" />);
        expect(screen.getByRole("heading")).toHaveTextContent("Card Title");
    })
});