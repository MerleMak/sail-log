import { render, screen } from "@testing-library/react";
import Button from "./Button.js";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button children="save" />);
    const button = screen.getByRole("button", { name: "save" });
    expect(button).toBeInTheDocument();
  });
});
