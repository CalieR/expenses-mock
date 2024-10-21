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

  const [filterColumn, setFilterColumn] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSortByColumn = (sortColumn: string) => {
    setSortAscending(!sortAscending);
    setTableRows(tableRows.sort(sortByColumn(sortColumn, sortAscending)));
  };

  const handleFilter = () => {
    const filteredRows = filterItemsBy(
      tableRows,
      filterColumn,
      filterValue,
      filterCondition
    );
    setTableRows(filteredRows);
  };

  const resetFilters = () => {
    setFilterColumn('');
    setFilterCondition('');
    setFilterValue('');
    setTableRows(tableRowsCache);
  };

  return (
    <>
      <div className="flex items-end gap-4">
        <label className=" w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter column:</span>
          </div>
          <select
            id="filter-column-select"
            className="bg-opacity-100"
            value={filterColumn}
            onChange={(e) => setFilterColumn(e.target.value)}
          >
            <option value="">Select a column</option>
            {columns.map((column) => (
              <option key={column.accessor} value={column.accessor}>
                {column.header}
              </option>
            ))}
          </select>
        </label>
        <label className=" w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter condition:</span>
          </div>
          <select
            id="filter-condition-select"
            className="select select-bordered"
            value={filterCondition}
            onChange={(e) => setFilterCondition(e.target.value)}
          >
            <option value="">Select a condition</option>
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
          </select>
        </label>
        <label className="w-full max-w-x">
          <div className="label">
            <span className="label-text">Filter value:</span>
          </div>
          <input
            id="filter-value-input"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4"
        onClick={handleFilter}
      >
        Apply Filters
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={resetFilters}
      >
        Reset filters
      </button>
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
