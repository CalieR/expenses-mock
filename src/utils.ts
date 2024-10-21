// formatting functions

export const formatDate = (value: string) => {
  const date = new Date(value);
  const monthAndDay = date.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
  });
  return monthAndDay.split(' ').reverse().join(' ');
};

export const formatAmount = (price: number | string) => {
  return `£${price}`;
};

export const capitalise = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const upperCase = (value: string | number) => {
  return value.toString().toUpperCase();
};

export const defaultFormatter = (value: string | number) =>
  value.toLocaleString();

// filtering functions

export const filterItemsBy = (
  dataToSort: Record<string, string | number>[],
  columnName: string,
  value: string | number,
  operator: string
) => {
  return dataToSort.filter((row: Record<string, string | number>) =>
    determineOperator(operator, row[columnName], value)
  );
};

const determineOperator = (
  operator: string,
  rowValue: string | number,
  value: string | number
) => {
  // add more conditions
  switch (operator) {
    case 'equals':
      return rowValue === value;
    case 'contains':
      return rowValue.toString().includes(value.toString());
    default:
      return false;
  }
};

// sorting functions

export const sortByColumn = (column: string, asc: boolean) => {
  return (
    a: Record<string, string | number>,
    b: Record<string, string | number>
  ) => {
    const lhs = asc ? a : b;
    const rhs = asc ? b : a;

    const dataType = typeof a[column];
    switch (dataType) {
      case 'string':
        return (lhs[column] as string).localeCompare(rhs[column] as string);
      case 'number':
        return (lhs[column] as number) - (rhs[column] as number);
      default:
        return 0;
    }
  };
};
