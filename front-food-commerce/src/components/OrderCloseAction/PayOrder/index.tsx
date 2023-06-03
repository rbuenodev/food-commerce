import { currencyFormat } from "../../../helpers/currencyFormat";
import { useCart } from "../../../hooks/useCart";
import { Button, Container } from "../styles";

const PayOrder: React.FC = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <Button to="/payment" className="btnOrder">
        Pagar
      </Button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
};

export default PayOrder;
