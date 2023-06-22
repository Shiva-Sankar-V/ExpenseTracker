import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expensesummary-9fbaf-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}

//"https://expensesummary-9fbaf-default-rtdb.firebaseio.com/" is root URL.
// We can add more (segments i.e. node i.e. folder) to it as above. '.json' is firebase specific syntax.
