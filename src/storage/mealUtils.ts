import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal, MealGroup } from "../@types/mainTypes";

import { COLLECTION_MEALS } from "./storageConfig";

type DietStatistics = {
  totalMeals: number;
  inDietMeals: number;
  percentage: string;
  outMeals: number;
  bestSequence: number;
};

export const getDietStatistics = async (): Promise<DietStatistics> => {
  let totalMeals: number = 0;
  let inDietMeals: number = 0;
  const storage = await AsyncStorage.getItem(COLLECTION_MEALS);
  if (storage) {
    const parsedData = storage && JSON.parse(storage);
    parsedData.forEach((group: MealGroup) => {
      group.data.forEach((meal: Meal) => {
        totalMeals++;
        if (meal.isInDiet) {
          inDietMeals++;
        }
      });
    });
    return {
      totalMeals,
      inDietMeals,
      percentage: ((inDietMeals / totalMeals) * 100).toFixed(2),
      bestSequence: await getBestSequence(parsedData),
      outMeals: totalMeals - inDietMeals,
    };
  } else {
    return {} as DietStatistics;
  }
};

export const getBestSequence = async (parsedData: MealGroup[]) => {
  let bestSequence = 0;
  let currentSequence = 0;
  parsedData.forEach((group: MealGroup) => {
    group.data.forEach((meal: Meal) => {
      if (meal.isInDiet) {
        currentSequence++;
      } else {
        if (currentSequence > bestSequence) {
          bestSequence = currentSequence;
        }
        currentSequence = 0;
      }
    });
  });

  if (currentSequence > bestSequence) {
    bestSequence = currentSequence;
  }

  return bestSequence;
};
