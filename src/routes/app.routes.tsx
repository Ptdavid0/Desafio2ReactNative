import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
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
    </Navigator>
  );
};

export default AppRoutes;
