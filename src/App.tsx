import { useEffect, useState } from 'react';
import './App.css';
import getExpenses from './service/expenseService';
import { TableData } from './types/types';
import Table from './components/Table';


function App() {
  const [expenses, setExpenses] = useState<TableData>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchExpenses = async () => {
    const response = await getExpenses();
    setExpenses(response);
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
        Expenses Mock
      </h1>
      <hr></hr>
      {loading && <p>Loading expenses...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && expenses && <Table tableData={expenses} />}
    </div>
  );
}

export default App;
