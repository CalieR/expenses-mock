type Expense = {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: string;
  category: string;
  status: string;
};

interface ApiResponse<T> {
  data: T;
  error?: string;
}

interface TableData {
  columns: TableColumn[];
  rows: Record<string, number | string>[];
  error?: string;
}

// Needed the utility Record type in order to 'loosen the object type': previously was using a type (Expense) that was too 'loose' to access the objects properties.
// 3 ways to solve the problem, I chose 'loosening the object type', allowing me to access the properties with a string key.
// can also tighten the index or cast the index

interface TableColumn {
  header: string;
  accessor: string;
  formatFn: FormatterFunction;
  isSortable: boolean;
  link?: string;
}

type FormatterFunction = (value: string | number) => string;

export type { Expense, ApiResponse, TableData, TableColumn, FormatterFunction };

// type pagedApiResponse =

// type ExpenseApiResponse = ApiResponse<Expense[]>;
// type StringApiResponse = ApiResponse<string>;
// type NumberApiResponse = ApiResponse<number>;
