import React from "react";
import { Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Meal } from "../../@types/mainTypes";

import { Container } from "./styles";

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
  console.log();
  if (!meal) {
    navigate("Home");
  }
  const { name } = meal;
  return (
    <Container>
      <Text>MealDetails</Text>
      <Text>{name}</Text>
    </Container>
  );
};

export default MealDetails;
