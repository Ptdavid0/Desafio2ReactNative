import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  Container,
  Icon,
  HeaderContainer,
  StatisticsContainer,
  LowerInfoContainer,
  Title,
  IconContainer,
} from "./styles";
import StaticticText from "../../components/StaticticText";
import InfoContainer from "../../components/InfoContainer";

const StatisticDetail: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <HeaderContainer type="PRIMARY">
        <IconContainer onPress={() => navigate("Home")}>
          <Icon name="arrow-back" type="PRIMARY" />
        </IconContainer>
        <StaticticText
          statistic={90.86}
          isStatistic
          description="das refeições dentro da dieta"
          fontSize="XXXL"
        />
      </HeaderContainer>
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <InfoContainer
          isStatistic={false}
          statistic={90}
          description="das refeições dentro da dieta"
          color="GRAY_300"
          fontSize="XXL"
          size="large"
          addMargin
        />
        <InfoContainer
          statistic={6}
          isStatistic={false}
          description="das refeições dentro da dieta"
          color="GRAY_300"
          fontSize="XXL"
          size="large"
          addMargin
        />
        <LowerInfoContainer>
          <InfoContainer
            isStatistic={false}
            statistic={10}
            description="das refeições dentro da dieta"
            color="GREEN_MID"
            fontSize="XXL"
            size="small"
            addMargin
          />
          <InfoContainer
            isStatistic={false}
            statistic={22}
            description="das refeições dentro da dieta"
            color="RED_MID"
            fontSize="XXL"
            size="small"
            addMargin
          />
        </LowerInfoContainer>
      </StatisticsContainer>
    </Container>
  );
};

export default StatisticDetail;
