import { useEffect, useReducer, useState } from 'react';
import getExpenses, { columns } from './service/expenseService';
import { expensesReducer } from './reducers/expensesReducer';
import Table from './components/Table';
import './App.css';

function AppReducer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [expenses, dispatchExpenses] = useReducer(expensesReducer, {
    columns: columns,
    rows: [],
  });

  const fetchExpenses = async () => {
    const response = await getExpenses();
    dispatchExpenses({
      type: 'SET_EXPENSES',
      payload: response,
    });
    setError(response.error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchExpenses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 data-testid="headline" className="text-2xl font-bold mb-4">
        Expenses Mock - Reducer example
      </h1>
      <hr></hr>
      {loading && <p>Loading expenses...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && expenses && <Table tableData={expenses} />}
    </div>
  );
}

export default AppReducer;
