import api from "../api";
import { IDrinkDto } from "./drinkDto";

export const getDrinks = async (): Promise<IDrinkDto[]> => {
  const result = await api.get<IDrinkDto[]>("/drinks");
  return result.data;
};
