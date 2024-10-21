import { useState } from 'react';
import { TableData } from '../types/types';
import { sortByColumn } from '../utils';

type TableProps = {
  tableData: TableData;
};

const Table = (props: TableProps) => {
  const { rows, columns } = props.tableData;

  const [tableRows, setTableRows] = useState(rows);
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  const handleSortByColumn = (sortColumn: string) => {
    setSortAscending(!sortAscending);
    setTableRows(rows.sort(sortByColumn(sortColumn, sortAscending)));
  };

  return (
    <div data-testid="table">
      <table className="table-auto">
        <thead className="min-w-full">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => handleSortByColumn(column.accessor)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.accessor}>
                  {column.formatFn(row[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length === 0 && <p className="m-4">No expense records to display!</p>}
    </div>
  );
};

export default Table;
