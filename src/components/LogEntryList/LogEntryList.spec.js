import { render, screen } from '@testing-library/react';
import LogEntryList from './LogEntryList.js';

describe('LogEntryList', () => {
  let logEntries;

  logEntries = [
    {
      notes: '30.03.2022: wind direction SSW',
    },
    {
      notes: '29.03.2022: wind direction W',
    },
  ].slice();

  it('renders a list', () => {
    render(<LogEntryList logEntries={logEntries} />);

    expect(
      screen.getByRole('list', { name: /Your-log-entries/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText('30.03.2022: wind direction SSW')
    ).toBeInTheDocument();
  });
});
