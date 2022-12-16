import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import StatisticDetail from "../screens/StatisticDetail";
import MealDetails from "../screens/MealDetails";
import MealForm from "../screens/MealForm";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Statistics"
        component={StatisticDetail}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="MealDetails"
        component={MealDetails}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="MealForm"
        component={MealForm}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
