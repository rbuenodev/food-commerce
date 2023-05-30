import { createContext, ReactNode, useEffect, useState } from "react";
import { getBurgers } from "../services/burgerService/service";
import { getDrinks } from "../services/drinkService/service";
import { getIceCreams } from "../services/iceCreamsService/service";
import { getPizzas } from "../services/pizzaService/service";
import { ISnackData } from "../interfaces/ISnackData";


interface ISnackContextProps {
  burgers: ISnackData[];
  pizzas: ISnackData[];
  drinks: ISnackData[];
  iceCreams: ISnackData[];
}

interface ISnackProviderProps {
  children?: ReactNode;
}

const SnackContext = createContext({} as ISnackContextProps);

const SnackProvider: React.FC<ISnackProviderProps> = ({ children }) => {
  const [burgers, setBurgers] = useState<ISnackData[]>([]);
  const [pizzas, setPizzas] = useState<ISnackData[]>([]);
  const [drinks, setDrinks] = useState<ISnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<ISnackData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = await getBurgers();
        const pizzaRequest = await getPizzas();
        const drinkRequest = await getDrinks();
        const iceCreamRequest = await getIceCreams();

        const requests = [
          burgerRequest,
          pizzaRequest,
          drinkRequest,
          iceCreamRequest,
        ];

        const [burgerResponse, pizzaResponse, drinkResponse, iceCreamResponse] =
          await Promise.all(requests);

        setBurgers(burgerResponse);
        setPizzas(pizzaResponse);
        setDrinks(drinkResponse);
        setIceCreams(iceCreamResponse);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SnackContext.Provider value={{ burgers, drinks, iceCreams, pizzas }}>
      {children}
    </SnackContext.Provider>
  );
};

export { SnackContext, SnackProvider };
