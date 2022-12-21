import { MealGroup } from "../@types/mainTypes";

export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
};

export const formatDate = (date: Date) => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const timestampToDate = (timestamp: number) => {
  return new Date(timestamp);
};

export const orderByDate = (meals: MealGroup[]) => {
  const orderedMeals = meals.sort((a, b) => {
    const dateA = getDateByString(a.title);
    const dateB = getDateByString(b.title);
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });
  return orderedMeals;
};

const getDateByString = (date: string) => {
  const year = date.split("/")[2];
  const month = date.split("/")[1];
  const day = date.split("/")[0];
  return new Date(`${year}-${month}-${day}`);
};

export const orderMeals = (meals: MealGroup[]) => {
  const orderedMeals = meals.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  });
  return orderedMeals;
};
