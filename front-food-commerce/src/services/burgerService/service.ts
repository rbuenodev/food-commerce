import api from "../api";
import { IBurgerDto } from "./burgerDto";

export const getBurgers = async (): Promise<IBurgerDto[]> => {
  const result = await api.get<IBurgerDto[]>("/burgers");
  return result.data;
};
