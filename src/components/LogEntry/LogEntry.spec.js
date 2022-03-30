import { render, screen } from '@testing-library/react';
import LogEntry from './LogEntry';

describe('LogEntry', () => {
  it('shows the input of notes', () => {
    render(<LogEntry logEntryData="hello" />);

    const note = screen.getByText(/"hello"/i);
    expect(note).toBeInTheDocument();
  });
});
