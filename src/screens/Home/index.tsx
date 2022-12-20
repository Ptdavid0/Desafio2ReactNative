import React from "react";
import { SectionList } from "react-native";
import Button from "../../components/Button";
import HomeHeader from "../../components/homeHeader";
import InfoContainer from "../../components/InfoContainer";
import { mockMeal } from "../../utils/mockData";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, AddMealContainer, Text, HeaderTextSection } from "./styles";
import { getAllMeals } from "../../storage/mealGetAll";

const Home: React.FC = () => {
  const [meals, setMeals] = React.useState([]);
  const { navigate } = useNavigation();
  const handleNewMealButton = () => {
    navigate("MealForm", { isEditing: false });
  };

  useFocusEffect(
    React.useCallback(() => {
      const getMeals = async () => {
        const meals = await getAllMeals();
        setMeals(meals);
      };
      getMeals();
    }, [])
  );

  console.log(meals);

  return (
    <Container>
      <HomeHeader />
      <InfoContainer
        isStatistic
        statistic={90.86}
        description="das refeições dentro da dieta"
        color="GREEN_MID"
        fontSize="XXXL"
        size="large"
        hasIconDetails
      />
      <AddMealContainer>
        <Text>Refeições</Text>
        <Button
          title="Nova Refeição"
          icon={"add"}
          onPress={handleNewMealButton}
        />
      </AddMealContainer>

      {meals && meals.length > 0 && (
        <SectionList
          sections={mockMeal}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Text>Hello</Text>;
          }}
          renderSectionHeader={({ section: { title } }) => (
            <HeaderTextSection>{title}</HeaderTextSection>
          )}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <HeaderTextSection>Nenhuma refeição encontrada</HeaderTextSection>
          )}
        />
      )}
    </Container>
  );
};

export default Home;
