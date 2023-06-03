import ManAndBurgerIcon from "../@shared/Icons/ManAndBurgerIcon";
import { Button, Container } from "./styles";

interface IEmptyCartProps {
  title: string;
}

const EmptyCart: React.FC<IEmptyCartProps> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to="/">Checar o cardápio</Button>
      <ManAndBurgerIcon isImg={true} alt="Homem com hambúrguer" />
    </Container>
  );
};

export default EmptyCart;
