import { render, screen } from '@testing-library/react';

import Table from '../components/Table';
import { defaultFormatter } from '../utils';

const mockExpenses = {
  columns: [
    { header: 'Date', accessor: 'date', isSortable: true, formatFn: defaultFormatter },
    { header: 'Amount', accessor: 'amount', isSortable: false, formatFn: defaultFormatter },
  ],
  rows: [
    { date: '2022-01-01', amount: 100 },
    { date: '2022-01-02', amount: 200 },
    { date: '2022-01-03', amount: 300 },
  ]
};

describe('Table', () => {
  it('renders a table', () => {
    render(<Table tableData={mockExpenses} />);

    expect(screen.getByTestId('table')).toBeDefined();
  });
});
