import { Meal } from "./mainTypes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MealForm: {
        isEditing: boolean;
        meal?: Meal;
      };
      Statistics: {
        statistic: number;
        description: string;
      };
      MealDetails: {
        meal: Meal;
      };
      EndScreen: {
        isInDiet: boolean;
      };
    }
  }
}
