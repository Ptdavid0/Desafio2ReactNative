import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/index";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import Routes from "./src/routes";
import Loading from "./src/components/Loading";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {!fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
};

export default App;
