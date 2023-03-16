import api from "../api";
import { IPizzaDto } from "./pizzaDto";

export const getPizzas = async (): Promise<IPizzaDto[]> => {
  const result = await api.get("/pizzas");
  return result.data;
};
