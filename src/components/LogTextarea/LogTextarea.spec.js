import { render, screen } from '@testing-library/react';
import LogTextarea from './LogTextarea';

describe('LogTextarea', () => {
  it("renders a textarea with the label 'Notes:'", () => {
    render(<LogTextarea labelText="Notes" />);

    const Input = screen.getByLabelText('Notes');
    expect(Input).toBeInTheDocument();
  });
});
