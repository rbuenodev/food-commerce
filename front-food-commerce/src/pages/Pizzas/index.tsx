import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { useSnack } from "../../hooks/useSnack";

const Pizzas: React.FC = () => {
  const { pizzas } = useSnack();

  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  );
};

export default Pizzas;
