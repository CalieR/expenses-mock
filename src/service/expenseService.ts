import { ApiResponse, Expense, TableColumn, TableData } from '../types/types';
import {
  capitalise,
  defaultFormatter,
  formatAmount,
  formatDate,
  upperCase,
} from '../utils';

const getExpensesData = async (): Promise<ApiResponse<Expense[]>> => {
  try {
    const response = await fetch('../expenses.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const body = await response.json();
    return {
      data: body,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      error: 'Failed to fetch data',
    };
  }
};

const columns: TableColumn[] = [
  {
    header: 'ID',
    accessor: 'id',
    isSortable: false,
    link: 'expenses/{id}',
    formatFn: defaultFormatter,
    
  },
  {
    header: 'Date',
    accessor: 'date',
    isSortable: false,
    formatFn: defaultFormatter,
  },
  {
    header: 'Merchant',
    accessor: 'merchant',
    isSortable: false,
    formatFn: defaultFormatter,
  },
  {
    header: 'Amount',
    accessor: 'amount',
    isSortable: true,
    formatFn: formatAmount,
  },
  {
    header: 'Category',
    accessor: 'category',
    isSortable: false,
    formatFn: defaultFormatter,
  },
  {
    header: 'Description',
    accessor: 'description',
    isSortable: false,
    formatFn: defaultFormatter,
  },
  {
    header: 'Status',
    accessor: 'status',
    isSortable: false,
    formatFn: upperCase,
  },
];

// const columnData = {
//   id: { header: 'ID', accessor: 'id', isSortable: false },
//   date: { header: 'Date', accessor: 'date', isSortable: false },
//   merchant: { header: 'Merchant', accessor: 'merchant', isSortable: false },
// };

// columnData['id'].isSortable;

const getExpenses = async (): Promise<TableData> => {
  const expenses = await getExpensesData();
  const rows = expenses.data.map((expense) => ({
    id: expense.id,
    date: formatDate(expense.date),
    merchant: expense.merchant,
    amount: expense.amount,
    category: capitalise(expense.category),
    description: expense.description,
    status: capitalise(expense.status),
  }));

  return {
    columns: columns,
    rows: rows,
    error: expenses.error,
  };
};

export default getExpenses;
