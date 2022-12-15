import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Meal } from "../../@types/mainTypes";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import Header from "../../components/Header";
type RouteParams = {
  params: {
    meal: Meal;
  };
};

const MealDetails: React.FC = () => {
  const {
    params: { meal },
  } = useRoute() as RouteParams;
  const { navigate } = useNavigation();

  if (!meal) {
    navigate("Home");
  }

  const { name } = meal;
  return (
    <Container>
      <Header title={name} />
    </Container>
  );
};

export default MealDetails;
