import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal, MealGroup } from "../@types/mainTypes";
import { formatDate } from "../utils/DateUtils";

import { COLLECTION_MEALS } from "./storageConfig";

export const createMeal = async (meal: Meal) => {
  // AsyncStorage.clear();
  try {
    const storage = await AsyncStorage.getItem(COLLECTION_MEALS);

    if (storage) {
      const groupExists: boolean = verifyIfGroupMealExists(
        formatDate(meal.date),
        storage
      );
      if (groupExists) {
        const group: MealGroup = await getGroupMeal(
          formatDate(meal.date),
          storage
        );
        const updatedGroup: MealGroup = {
          title: group.title,
          data: [...group.data, meal],
        };

        const parsedData = storage && JSON.parse(storage);

        const updatedData = parsedData.map((item: MealGroup) => {
          if (item.title === group.title) {
            return updatedGroup;
          } else {
            return item;
          }
        });

        await AsyncStorage.setItem(
          COLLECTION_MEALS,
          JSON.stringify(updatedData)
        );
      } else {
        const date = formatDate(meal.date);

        const newGroup: MealGroup = {
          title: date,
          data: [meal],
        };

        const parsedData = storage && JSON.parse(storage);

        const updatedData = [...parsedData, newGroup];

        await AsyncStorage.setItem(
          COLLECTION_MEALS,
          JSON.stringify(updatedData)
        );
      }
    } else {
      const date = formatDate(meal.date);

      const newGroup: MealGroup = {
        title: date,
        data: [meal],
      };

      await AsyncStorage.setItem(COLLECTION_MEALS, JSON.stringify([newGroup]));
    }
    const updatedStorage = await AsyncStorage.getItem(COLLECTION_MEALS);
    console.log(updatedStorage);
  } catch (error: any) {
    throw new Error(error);
  }
};

const verifyIfGroupMealExists = (date: string, storage: string) => {
  const parsedStorage = JSON.parse(storage);

  const groupExists = parsedStorage.find(
    (item: MealGroup) => item.title === date
  );

  return groupExists;
};

const getGroupMeal = (date: string, storage: string) => {
  try {
    const parsedStorage = JSON.parse(storage);

    const group = parsedStorage.find((item: MealGroup) => item.title === date);

    return group;
  } catch (error: any) {
    throw new Error(error);
  }
};
