import { createContext, ReactNode } from "react";

interface ISnackData {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ISnackContextProps {
  burgers: ISnackData[];
  pizzas: ISnackData[];
  drinks: ISnackData[];
  iceCreams: ISnackData[];
}

interface BaseLayoutProps {
  children?: ReactNode;
}

const SnackContext = createContext({} as ISnackContextProps);

const SnackProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <SnackContext.Provider
      value={{ burgers: [], drinks: [], iceCreams: [], pizzas: [] }}
    >
      {children}
    </SnackContext.Provider>
  );
};
