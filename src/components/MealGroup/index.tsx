import React from "react";
import { Meal } from "../../@types/mainTypes";
import MealCard from "../MealCard";

import { Container } from "./styles";

type MealsGroupProps = {
  meals: Meal[];
};

const MealsGroup: React.FC<MealsGroupProps> = ({ meals }) => {
  return (
    <Container>
      {meals.map((meal) => (
        <MealCard meal={meal} />
      ))}
    </Container>
  );
};

export default MealsGroup;
