import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MealDetails from "../screens/MealDetails";
import StatisticsDetails from "../screens/StatisticsDetails";

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
        component={StatisticsDetails}
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
    </Navigator>
  );
};

export default AppRoutes;
