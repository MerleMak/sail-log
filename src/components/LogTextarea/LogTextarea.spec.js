import { render, screen } from "@testing-library/react";
import LogInput from "./LogInput";

describe("LogInput", () => {
  it("renders an input with the label 'Notes:'", () => {
    render(<LogInput labelText="Notes" />);

    const Input = screen.getByLabelText("Notes");
    expect(Input).toBeInTheDocument();
  });
});
