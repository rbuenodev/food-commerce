import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";
import { getIceCreams } from "../../services/iceCreamsService/service";

interface IIceCream {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const IceCreams: React.FC = () => {
  const [iceCreams, setIceCreams] = useState<IIceCream[]>([]);
  
  useEffect(() => {
    (async () => {
      const iceCreamRequest = await getIceCreams();
      setIceCreams(iceCreamRequest);
    })();
  }, []);

  return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  );
};

export default IceCreams;
