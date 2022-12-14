import React from "react";
import HomeHeader from "../../components/homeHeader";
import InfoContainer from "../../components/InfoContainer";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader />
      <InfoContainer
        statistic="90,86%"
        description="Followers"
        color="GREEN_LIGHT"
        fontSize="XXXL"
        size="large"
        hasIconDetails
      />
    </Container>
  );
};

export default Home;
