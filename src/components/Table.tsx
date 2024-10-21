import { useState } from 'react';
import { TableData } from '../types/types';
import { filterItemsBy, sortByColumn } from '../utils';

type TableProps = {
  tableData: TableData;
};

const Table = (props: TableProps) => {
  const { rows, columns } = props.tableData;
  const tableRowsCache = rows;
  const [tableRows, setTableRows] = useState(rows);
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  const handleSortByColumn = (sortColumn: string) => {
    setSortAscending(!sortAscending);
    setTableRows(tableRows.sort(sortByColumn(sortColumn, sortAscending)));
  };

  const handleFilter = () => {
    const filteredRows = filterItemsBy(tableRows, 'merchant', 'W', 'contains');
    setTableRows(filteredRows);
  };

  const resetFilters = () => {
    setTableRows(tableRowsCache);
  };

  return (
    <>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4" onClick={handleFilter}>Filter by merchant starts with W</button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={resetFilters}>Reset filters</button>
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
        {rows.length === 0 && (
          <p className="m-4">No expense records to display!</p>
        )}
      </div>
    </>
  );
};

export default Table;
