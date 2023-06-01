import { Link } from "react-router-dom";
import LogoIcon from "../@shared/Icons/LogoIcon";
import { Container } from "./styles";
import { useCart } from "../../hooks/useCart";
import ShoppingCartIcon from "../@shared/Icons/ShoppingCartIcon";

const OrderHeader: React.FC = () => {
  const { cart } = useCart();

  return (
    <Container>
      <Link to="/">
        <LogoIcon isImg={true} alt="Food Commerce" />
      </Link>
      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, "0")}</strong> items(s)
          </span>
        </div>
        <ShoppingCartIcon isImg={false} />
      </div>
    </Container>
  );
};

export default OrderHeader;
