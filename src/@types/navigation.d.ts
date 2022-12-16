import { Meal } from "./mainTypes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AddMeal: undefined;
      Statistics: {
        statistic: number;
        description: string;
      };
      MealDetails: {
        meal: Meal;
      };
    }
  }
}
