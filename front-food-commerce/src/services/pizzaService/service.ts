import api from "../api";
import { IPizzaDto } from "./pizzaDto";

export const getPizzas = async (): Promise<IPizzaDto[]> => {
  const result = await api.get<IPizzaDto[]>("/pizzas");
  return result.data;
};
