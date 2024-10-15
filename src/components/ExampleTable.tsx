const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
];

const data: Record<string, number | string>[] = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { name: 'Mike Johnson', age: 45, email: 'mike@example.com' },
];

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
