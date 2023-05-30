import { useCart } from "../../hooks/useCart";
import ShoppingCartIcon from "../@shared/Icons/ShoppingCartIcon";
import { Container } from "./styles";

const MyOrder: React.FC = () => {
  const { cart } = useCart();
  return (
    <Container to="/cart">
      <span>Meu Pedido</span>
      <ShoppingCartIcon isImg={false} />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, "0")}</span>}
    </Container>
  );
};

export default MyOrder;
