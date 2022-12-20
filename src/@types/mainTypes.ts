export type Meal = {
  id: string;
  description: string;
  name: string;
  time: number;
  date: Date;
  isInDiet: boolean;
};

export type MealGroup = {
  title: string;
  data: Meal[];
};
