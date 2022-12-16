import { useRoute } from "@react-navigation/native";
import React from "react";
import { Meal } from "../../@types/mainTypes";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  InfoSection,
  Description,
  Name,
  TextContainer,
  TimeTitle,
  Date,
  DietContainer,
  Icon,
  ButtonContainer,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
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

  const { isInDiet, description, name, date, time } = meal;
  return (
    <Container>
      <Header title={"Refeição"} isInDiet={isInDiet} />
      <InfoSection>
        <TextContainer>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </TextContainer>
        <TextContainer>
          <TimeTitle>Data e hora</TimeTitle>
          <Date>{`${date} às ${time}`}</Date>
        </TextContainer>
        <DietContainer>
          <Icon isInDiet={isInDiet} />
          {isInDiet ? (
            <Description>dentro da dieta</Description>
          ) : (
            <Description>fora da dieta</Description>
          )}
        </DietContainer>
        <ButtonContainer>
          <Button title={"Editar refeição"} icon="edit" size={16} />
          <Button
            title={"Excluir refeição"}
            type="SECONDARY"
            icon="delete-outline"
            size={16}
          />
        </ButtonContainer>
      </InfoSection>
    </Container>
  );
};

export default MealDetails;
