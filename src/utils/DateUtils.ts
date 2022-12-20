import { MealGroup } from "../@types/mainTypes";

export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const timestampToDate = (timestamp: number) => {
  return new Date(timestamp);
};

export const orderByDate = (a: any, b: any) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
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
