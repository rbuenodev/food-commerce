import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { useSnack } from "../../hooks/useSnack";

const IceCreams: React.FC = () => {
  const { iceCreams } = useSnack();

  return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  );
};

export default IceCreams;
