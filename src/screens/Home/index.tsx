import React from "react";
import Button from "../../components/Button";
import HomeHeader from "../../components/homeHeader";
import InfoContainer from "../../components/InfoContainer";

import { Container, AddMealContainer, Text } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader />
      <InfoContainer
        statistic="90,86%"
        description="das refeições dentro da dieta"
        color="GREEN_LIGHT"
        fontSize="XXXL"
        size="large"
        hasIconDetails
      />
      <AddMealContainer>
        <Text>Refeições</Text>
        <Button title="Nova Refeição" icon={"add"} />
      </AddMealContainer>
    </Container>
  );
};

export default Home;
