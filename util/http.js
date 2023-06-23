import axios from "axios";

const DB_url = "https://expensesummary-9fbaf-default-rtdb.firebaseio.com";

//when we post a data firebase provides response to that request.
//So we can use async await to get the response data which will have the generated id.
//Firebase stores the id in the name of '.name'

export async function storeExpense(expenseData) {
  const response = await axios.post(DB_url + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExp() {
  const response = await axios.get(DB_url + "/expenses.json");

  const expenses = [];
  //   console.log(response.data);
  for (const key in response.data) {
    const expObj = {
      id: key,
      amt: response.data[key].amt,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expObj);
  }
  return expenses;
}

export function updateExpense(id, expData) {
  return axios.put(DB_url + `/expenses/${id}.json`, expData);
}

export function deleteExpense(id) {
  return axios.delete(DB_url + `/expenses/${id}.json`);
}
