import { MealGroup } from "../@types/mainTypes";

export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
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
