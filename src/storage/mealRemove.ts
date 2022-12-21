import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal, MealGroup } from "../@types/mainTypes";
import { formatDate } from "../utils/DateUtils";

import { COLLECTION_MEALS } from "./storageConfig";

export const removeMeal = async (meal: Meal) => {
  try {
    const storage = await AsyncStorage.getItem(COLLECTION_MEALS);

    if (storage) {
      const parsedData: MealGroup[] = storage && JSON.parse(storage);

      const updatedData = parsedData.map((item: MealGroup) => {
        if (item.title === formatDate(meal.date)) {
          const updatedMeals = item.data.filter((item) => item.id !== meal.id);
          if (updatedMeals.length === 0) {
            return null;
          }
          return { title: item.title, data: updatedMeals };
        } else {
          return item;
        }
      });

      const filteredData = updatedData.filter((item) => item !== null);

      await AsyncStorage.setItem(
        COLLECTION_MEALS,
        JSON.stringify(filteredData)
      );
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
