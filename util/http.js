import axios from "axios";

const DB_url = "https://expensesummary-9fbaf-default-rtdb.firebaseio.com";

//Since we will be using the root url many times i am providing it to a constant so that
//when we require to change root url we can change in one place to change in many places

export function storeExpense(expenseData) {
  axios.post(DB_url + "/expenses.json", expenseData);
}

//"https://expensesummary-9fbaf-default-rtdb.firebaseio.com/" is root URL.
// We can add more (segments i.e. node i.e. folder) to it as above. '.json' is firebase specific syntax.

export async function fetchExp() {
  const response = await axios.get(DB_url + "/expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expObj);
  }
  return expenses;
}
