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

  // Needed the utility Record type in order to 'loosen the object type': previously was using a type (Expense) that was too 'loose' to access the objects properties.
  // 3 ways to solve the problem, I chose 'loosening the object type', allowing me to access the properties with a string key.
  // can also tighten the index or cast the index

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
    </div>
  );
};

export default Table;
