import { render, screen } from "@testing-library/react";
import LogForm from "./LogForm.js";

describe("LogForm", () => {
  it("renders a form", () => {
    render(<LogForm />);
    const form = screen.getByRole("form", { name: "Create-a-new-log-entry" });
    expect(form).toBeInTheDocument();
  });
});
