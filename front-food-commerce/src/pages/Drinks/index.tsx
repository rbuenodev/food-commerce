import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { getDrinks } from "../../services/drinkService/service";

interface IDrink {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Drinks: React.FC = () => {
  const [drinks, setDrinks] = useState<IDrink[]>([]);

  useEffect(() => {
    (async () => {
      const drinkRequest = await getDrinks();
      setDrinks(drinkRequest);
    })();
  }, []);

  return (
    <>
      <Head title="Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  );
};

export default Drinks;
