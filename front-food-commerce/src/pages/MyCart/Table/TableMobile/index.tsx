import CircleMinusIcon from "../../../../components/@shared/Icons/CircleMinusIcon";
import CirclePlusIcon from "../../../../components/@shared/Icons/CirclePlusIcon";
import RemoveIcon from "../../../../components/@shared/Icons/RemoveIcon";
import ConfirmOrder from "../../../../components/ConfirmOrder";
import { currencyFormat } from "../../../../helpers/currencyFormat";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles";

const TableMobile: React.FC = () => {
  const {
    cart,
    incrementSnackFromCart,
    decrementSnackFromCart,
    removeSnackFromCart,
  } = useCart();

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.id}-${item.snack}`} className="order-item">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button
                  type="button"
                  onClick={() => decrementSnackFromCart(item)}
                >
                  <CircleMinusIcon isImg={true} alt="Remover quantidade" />
                </button>
                <span>{`${item.quantity}`.padStart(2, "0")}</span>

                <button
                  type="button"
                  onClick={() => incrementSnackFromCart(item)}
                >
                  <CirclePlusIcon isImg={true} alt="Adicionar quantidade" />
                </button>
              </div>
              <button type="button" onClick={() => removeSnackFromCart(item)}>
                <RemoveIcon />
              </button>
            </div>
            <h5>
              <span>Subtotal</span>
              <strong>{currencyFormat(item.subtotal)}</strong>
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  );
};

export default TableMobile;
