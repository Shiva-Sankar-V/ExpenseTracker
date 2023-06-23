import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getReqDate } from "../util/date";
import { fetchExp } from "../util/http";
import Loading from "../components/ExpensesOutput/UI/Loading";
import Error from "../components/ExpensesOutput/UI/Error";

const RecentExpense = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error1, setError1] = useState();
  const expCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExp() {
      setIsFetching(true);
      try {
        const expenses = await fetchExp();
        expCtx.setExp(expenses);
      } catch (error) {
        setError1("Could not fetch the data!");
      }
      setIsFetching(false);
    }
    getExp();
  }, []);

  function errorHandler() {
    setError1(null);
  }

  if (error1 && !isFetching) {
    return <Error message={error1} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <Loading />;
  }

  const recentExp = expCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getReqDate(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExp}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered in the last 7 days"
    />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
