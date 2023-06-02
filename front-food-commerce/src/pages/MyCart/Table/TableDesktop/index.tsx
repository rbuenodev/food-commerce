import CircleMinusIcon from "../../../../components/@shared/Icons/CircleMinusIcon";
import CirclePlusIcon from "../../../../components/@shared/Icons/CirclePlusIcon";
import RemoveIcon from "../../../../components/@shared/Icons/RemoveIcon";
import ConfirmOrder from "../../../../components/ConfirmOrder";
import { currencyFormat } from "../../../../helpers/currencyFormat";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles";

const TableDesktop: React.FC = () => {
  const {
    cart,
    incrementSnackFromCart,
    decrementSnackFromCart,
    removeSnackFromCart,
  } = useCart();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Qtde</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image}></img>
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
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
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type="button" onClick={() => removeSnackFromCart(item)}>
                  <RemoveIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  );
};

export default TableDesktop;
