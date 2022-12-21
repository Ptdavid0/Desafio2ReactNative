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
import Popup from "../../components/Popup";
import { formatDate, timestampToTime } from "../../utils/DateUtils";

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
  const [isVisible, setIsVisible] = React.useState(false);

  if (!meal) {
    navigate("Home");
  }

  const handleEditMealButton = () => {
    navigate("MealForm", { isEditing: true, meal });
  };

  const handleDeleteMealButton = () => {
    setIsVisible(true);
  };

  const handleRemoveMeal = (id: string) => {};

  const { isInDiet, description, name, date, time } = meal;
  const formatedDate = date && formatDate(date);
  const formatedTime = time && timestampToTime(time);
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
          <Date>{`${formatedDate} às ${formatedTime}`}</Date>
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
          <Button
            title={"Editar refeição"}
            icon="edit"
            size={16}
            onPress={handleEditMealButton}
          />
          <Button
            title={"Excluir refeição"}
            type="SECONDARY"
            icon="delete-outline"
            size={16}
            onPress={handleDeleteMealButton}
          />
        </ButtonContainer>
      </InfoSection>
      <Popup
        isVisible={isVisible}
        removeMeal={() => handleRemoveMeal(meal.id)}
        closeModal={() => setIsVisible(false)}
      />
    </Container>
  );
};

export default MealDetails;
