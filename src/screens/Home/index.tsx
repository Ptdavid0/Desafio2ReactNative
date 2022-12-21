import React from "react";
import { SectionList } from "react-native";
import Button from "../../components/Button";
import HomeHeader from "../../components/homeHeader";
import InfoContainer from "../../components/InfoContainer";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, AddMealContainer, Text, HeaderTextSection } from "./styles";
import { getAllMeals } from "../../storage/mealGetAll";
import { MealGroup } from "../../@types/mainTypes";
import MealCard from "../../components/MealCard";
import { orderByDate } from "../../utils/DateUtils";
import Loading from "../../components/Loading";
import { getDietStatistics } from "../../storage/mealUtils";

const Home: React.FC = () => {
  const [meals, setMeals] = React.useState<MealGroup[]>([]);
  const [mealsPercentage, setMealsPercentage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const { navigate } = useNavigation();
  const handleNewMealButton = () => {
    navigate("MealForm", { isEditing: false });
  };

  useFocusEffect(
    React.useCallback(() => {
      const getMeals = async () => {
        setIsLoading(true);
        const meals = await getAllMeals();
        const orderedMeals = orderByDate(meals);
        setMeals(orderedMeals);
        setIsLoading(false);
      };
      getMeals();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      const getMeals = async () => {
        const { percentage } = await getDietStatistics();
        setMealsPercentage(percentage);
      };
      getMeals();
    }, [])
  );

  if (isLoading) {
    <Loading />;
  }

  return (
    <Container>
      <HomeHeader />
      <InfoContainer
        isStatistic
        statistic={isNaN(+mealsPercentage) ? 0 : +mealsPercentage}
        description="das refeições dentro da dieta"
        color={+mealsPercentage > 50 ? "GREEN_MID" : "RED_MID"}
        fontSize="XXXL"
        size="large"
        hasIconDetails
      />
      <AddMealContainer>
        <Text>Refeições</Text>
        <Button
          title="Nova refeição"
          icon={"add"}
          onPress={handleNewMealButton}
        />
      </AddMealContainer>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderTextSection>{title}</HeaderTextSection>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <HeaderTextSection>Nenhuma refeição cadastrada</HeaderTextSection>
        )}
      />
    </Container>
  );
};

export default Home;
