import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal, MealGroup } from "../@types/mainTypes";
import { formatDate } from "../utils/DateUtils";

import { COLLECTION_MEALS } from "./storageConfig";

export const removeMeal = async (meal: Meal) => {
  try {
    const storage = await AsyncStorage.getItem(COLLECTION_MEALS);

    if (storage) {
      const parsedData = storage && JSON.parse(storage);

      const updatedData = parsedData.map((item: MealGroup) => {
        if (item.title === formatDate(meal.date)) {
          const updatedMeals = item.meals.filter((item) => item.id !== meal.id);
          if (updatedMeals.length === 0) return;
          return { title: item.title, meals: updatedMeals };
        } else {
          return item;
        }
      });

      await AsyncStorage.setItem(COLLECTION_MEALS, JSON.stringify(updatedData));
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
