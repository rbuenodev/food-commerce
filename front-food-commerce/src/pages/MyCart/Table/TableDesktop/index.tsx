import CircleMinusIcon from "../../../../components/@shared/Icons/CircleMinusIcon";
import CirclePlusIcon from "../../../../components/@shared/Icons/CirclePlusIcon";
import PlusIcon from "../../../../components/@shared/Icons/PlusIcon";
import { currencyFormat } from "../../../../helpers/currencyFormat";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles";

const TableDesktop: React.FC = () => {
  const { cart } = useCart();
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
                  <button type="button" onClick={() => {}}>
                    <CircleMinusIcon isImg={true} alt="Remover quantidade" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, "0")}</span>
                  <button type="button" onClick={() => {}}>
                    <CirclePlusIcon isImg={true} alt="Adicionar quantidade" />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TableDesktop;
