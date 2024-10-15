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
}

export const defaultFormatter = (value: string | number) =>
  value.toLocaleString();

// filtering functions

// const filterItemsBy = (data: Expense[], columnName: string, value: string | number) => {
//   return data.filter((row: Record<string, string | number>) => row[columnName] === value)
// }

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
