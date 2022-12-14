import { Meal } from "./mainTypes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: undefined;
      MealDetails: {
        meal: Meal;
      };
    }
  }
}
