import React from "react";
import Button from "../../components/Button";

import {
  Container,
  ButtonContainer,
  Title,
  Subtitle,
  MainImage,
  SubtitleContainer,
  BoldSubtitle,
} from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

type EndScreenParams = {
  params: {
    isInDiet: boolean;
  };
};

const EndScreen: React.FC = () => {
  const {
    params: { isInDiet },
  } = useRoute() as EndScreenParams;
  const { navigate } = useNavigation();

  const handleGoHome = () => {
    navigate("Home");
  };

  return (
    <Container>
      <Title type={isInDiet ? "PRIMARY" : "SECUNDARY"}>
        {isInDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      <SubtitleContainer>
        <Subtitle>{isInDiet ? "Você continua" : "Você"}</Subtitle>
        <BoldSubtitle>
          {isInDiet ? " dentro da dieta" : " saiu da dieta "}
        </BoldSubtitle>
        <Subtitle>
          {isInDiet
            ? ". Muito bem!"
            : "dessa vez, mas continue se esforçando e não desista!"}
        </Subtitle>
      </SubtitleContainer>
      <MainImage
        source={
          isInDiet
            ? require("../../assets/Illustration.png")
            : require("../../assets/BoyIllustration.png")
        }
      />

      <ButtonContainer>
        <Button title="Ir para a página inicial" onPress={handleGoHome} />
      </ButtonContainer>
    </Container>
  );
};

export default EndScreen;
