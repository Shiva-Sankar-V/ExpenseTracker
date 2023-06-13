import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ManageExpense from "./screens/ManageExpense";
import AllExpense from "./screens/AllExpense";
import RecentExpense from "./screens/RecentExpense";

import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/ExpensesOutput/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <bottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            press={() => {
              navigation.navigate("Manage Expense");
            }}
          />
        ),
      })}
    >
      <bottomTab.Screen
        name="Recent"
        component={RecentExpense}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <bottomTab.Screen
        name="Overall"
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarLabel: "Overall",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <stack.Screen
              name="Expenses Overview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name="Manage Expense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
