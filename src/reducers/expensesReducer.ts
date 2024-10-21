import { TableData } from "../types/types";

export const expensesReducer = (
    expenses: TableData,
    action: { type: string; payload: TableData }
  ) => {
      // could replace this with a switch as more types are added
    if (action.type === 'SET_EXPENSES') {
      return action.payload;
    } else {
      throw new Error('Unknown action' + action.type);
    }
  };