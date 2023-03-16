import api from "../api";
import { IIceCreamDto } from "./iceCreamDto";

export const getIceCreams = async (): Promise<IIceCreamDto[]> => {
  const result = await api.get("/ice-creams");
  return result.data;
};
