import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { getPizzas } from "../../services/pizzaService/service";

interface IPizza {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
const Pizzas: React.FC = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  
  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas();
      setPizzas(pizzaRequest);
    })();
  }, []);

  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  );
};

export default Pizzas;
