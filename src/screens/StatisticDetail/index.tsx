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
import { getDietStatistics } from "../../storage/mealUtils";
import Loading from "../../components/Loading";

const StatisticDetail: React.FC = () => {
  const [mealsPercentage, setMealsPercentage] = React.useState<string>("");
  const [totalMeals, setTotalMeals] = React.useState<number>(0);
  const [inDietMeals, setInDietMeals] = React.useState<number>(0);
  const [outMeals, setOutMeals] = React.useState<number>(0);
  const [bestSequence, setBestSequence] = React.useState<number>(0);
  const { navigate } = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const getMeals = async () => {
        const { totalMeals, inDietMeals, percentage, outMeals, bestSequence } =
          await getDietStatistics();
        setMealsPercentage(percentage);
        setTotalMeals(totalMeals);
        setInDietMeals(inDietMeals);
        setOutMeals(outMeals);
        setBestSequence(bestSequence);
      };
      getMeals();
    }, [])
  );

  if (
    !mealsPercentage ||
    !totalMeals ||
    !inDietMeals ||
    !outMeals ||
    !bestSequence
  ) {
    <Loading />;
  }

  return (
    <Container>
      <HeaderContainer type={+mealsPercentage > 50 ? "PRIMARY" : "SECUNDARY"}>
        <IconContainer onPress={() => navigate("Home")}>
          <Icon name="arrow-back" type="PRIMARY" />
        </IconContainer>
        <StaticticText
          statistic={+mealsPercentage}
          isStatistic
          description="das refeições dentro da dieta"
          fontSize="XXXL"
        />
      </HeaderContainer>
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <InfoContainer
          isStatistic={false}
          statistic={bestSequence}
          description="melhor sequência de pratos dentro da dieta"
          color="GRAY_300"
          fontSize="XXL"
          size="large"
          addMargin
        />
        <InfoContainer
          statistic={totalMeals}
          isStatistic={false}
          description="refeições registradas"
          color="GRAY_300"
          fontSize="XXL"
          size="large"
          addMargin
        />
        <LowerInfoContainer>
          <InfoContainer
            isStatistic={false}
            statistic={inDietMeals}
            description="das refeições dentro da dieta"
            color="GREEN_MID"
            fontSize="XXL"
            size="small"
            addMargin
          />
          <InfoContainer
            isStatistic={false}
            statistic={outMeals}
            description="refeições fora da dieta"
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
