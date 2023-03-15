import Head from "../../components/Head";
import Snacks from "../../components/Snacks";
import SnackTitle from "../../components/SnackTitle";

const Burgers: React.FC = () => {
  const data = [
    {
      id: 1,
      snack: "burguer",
      name: "Mega",
      description:
        "O artesanal tamanho familia rechado com tres carnes suculentas, queijo e bacon",
      price: 25.5,
      image: "https://i.imgur.com/upjIUnG.jpg",
    },
    {
      id: 2,
      snack: "burguer",
      name: "Extra bacon",
      description:
        "Criado para os amantes de bacon, possui em todas as suas camadas bacon e ainda queijo e carne",
      price: 23.5,
      image: "https://i.imgur.com/B4J04AJ.jpg",
    },
  ];

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgers!" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data} />
    </>
  );
};

export default Burgers;
