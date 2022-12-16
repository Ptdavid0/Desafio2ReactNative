import React from "react";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  InfoSection,
  DoubleInputContainer,
  Label,
  InsideDietContainer,
  ButtonContainer,
  InnerInsideContainer,
  DietButton,
  Icon,
  Description,
} from "./styles";
import { Meal } from "../../@types/mainTypes";
import InputContainer from "../../components/InputContainer";
import Button from "../../components/Button";

type MealFormParams = {
  params: {
    isEditing: boolean;
    meal?: Meal;
  };
};

const MealForm: React.FC = () => {
  const {
    params: { isEditing, meal },
  } = useRoute() as MealFormParams;
  const [name, setName] = React.useState(meal?.name || "");
  const [description, setDescription] = React.useState(meal?.description || "");
  const [date, setDate] = React.useState(meal?.date || "");
  const [time, setTime] = React.useState(meal?.time || "");
  const [isInDiet, setIsInDiet] = React.useState<boolean | null>(
    meal?.isInDiet || null
  );

  return (
    <Container>
      <Header title={isEditing ? "Editar refeição" : "Nova Refeição"} />
      <InfoSection>
        <InputContainer label="Nome" value={name} />
        <InputContainer
          label="Descrição"
          size="large"
          value={description}
          isMultiline
        />
        <DoubleInputContainer>
          <InputContainer label="Data" size="small" value={date} />
          <InputContainer label="Hora" size="small" value={time} />
        </DoubleInputContainer>
        <InsideDietContainer>
          <Label>Está dentro da dieta ?</Label>
          <InnerInsideContainer>
            <DietButton
              onPress={() => setIsInDiet(true)}
              isInDiet={isInDiet}
              isInDietButton
            >
              <Icon isInDiet />
              <Description>Sim</Description>
            </DietButton>
            <DietButton
              onPress={() => setIsInDiet(false)}
              isInDiet={isInDiet}
              isInDietButton={false}
            >
              <Icon isInDiet={false} />
              <Description>Não</Description>
            </DietButton>
          </InnerInsideContainer>
        </InsideDietContainer>
        <ButtonContainer>
          <Button
            title={isEditing ? "Salvar alterações" : "Cadastrar refeição"}
          />
        </ButtonContainer>
      </InfoSection>
    </Container>
  );
};

export default MealForm;
