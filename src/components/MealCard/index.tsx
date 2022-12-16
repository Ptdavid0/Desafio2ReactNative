import React from "react";

import {
  Container,
  Icon,
  Time,
  Title,
  InfoContainer,
  Separator,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Meal } from "../../@types/mainTypes";

type Props = {
  meal: Meal;
};

const MealCard: React.FC<Props> = ({ meal }) => {
  const { navigate } = useNavigation();
  const handleNavigation = () => {
    navigate("MealDetails", {
      meal,
    });
  };
  const { id, name, time, isInDiet } = meal;
  return (
    <Container key={id} onPress={handleNavigation}>
      <InfoContainer>
        <Time>{time}</Time>
        <Separator>|</Separator>
        <Title>{name}</Title>
      </InfoContainer>
      <Icon isInDiet={isInDiet} />
    </Container>
  );
};

export default MealCard;
