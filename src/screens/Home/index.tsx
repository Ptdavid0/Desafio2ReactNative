import React from "react";
import { SectionList } from "react-native";
import Button from "../../components/Button";
import HomeHeader from "../../components/homeHeader";
import InfoContainer from "../../components/InfoContainer";
import MealCard from "../../components/MealCard";
import { mockMeal } from "../../utils/mockData";
import { useNavigation } from "@react-navigation/native";

import { Container, AddMealContainer, Text, HeaderTextSection } from "./styles";

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const handleNewMealButton = () => {
    navigate("MealForm", { isEditing: false });
  };
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

      <SectionList
        sections={mockMeal}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderTextSection>{title}</HeaderTextSection>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
