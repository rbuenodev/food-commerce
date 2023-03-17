import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { useSnack } from "../../hooks/useSnack";

const Drinks: React.FC = () => {
  const { drinks } = useSnack();
  return (
    <>
      <Head title="Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  );
};

export default Drinks;
