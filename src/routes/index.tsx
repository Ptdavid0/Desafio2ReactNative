import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components";

import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  const { COLORS } = useTheme();
  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};

export default Routes;
