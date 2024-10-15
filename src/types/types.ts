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

interface TableColumn {
  header: string;
  accessor: string;
  formatFn: FormatterFunction;
  isSortable: boolean;
  link?: string;
}

type FormatterFunction = (value: string | number) => string; 

export type { Expense, ApiResponse, TableData, TableColumn , FormatterFunction};

// type pagedApiResponse =

// type ExpenseApiResponse = ApiResponse<Expense[]>;
// type StringApiResponse = ApiResponse<string>;
// type NumberApiResponse = ApiResponse<number>;
