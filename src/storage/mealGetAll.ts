import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealGroup } from "../@types/mainTypes";

import { COLLECTION_MEALS } from "./storageConfig";

export const getAllMeals = async () => {
  const storage = await AsyncStorage.getItem(COLLECTION_MEALS);
  if (storage) {
    console.log("storage", storage);
    const parsedData: MealGroup[] = storage && JSON.parse(storage);
    return parsedData;
  } else {
    return [];
  }
};
