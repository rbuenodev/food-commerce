import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { getBurgers } from "../../services/burgerService/service";

interface IBurger {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Burgers: React.FC = () => {
  const [burgers, setBurgers] = useState<IBurger[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();
      setBurgers(burgerRequest);
    })();
  }, []);

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgers!" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  );
};

export default Burgers;
