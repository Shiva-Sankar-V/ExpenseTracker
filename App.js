import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./screens/ManageExpense";
import AllExpense from "./screens/AllExpense";
import RecentExpense from "./screens/RecentExpense";

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <bottomTab.Navigator>
      <bottomTab.Screen name="Recent" component={RecentExpense} />
      <bottomTab.Screen name="Overall" component={AllExpense} />
    </bottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Expenses Overview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen name="Manage Expense" component={ManageExpense} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
