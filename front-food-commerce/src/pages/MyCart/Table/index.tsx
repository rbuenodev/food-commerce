import { useCart } from "../../../hooks/useCart";
import TableDesktop from "./TableDesktop";

const Table: React.FC = () => {
  const { cart } = useCart();
  if (cart.length === 0) {
    return <h1>Ops! parece que você não tem pedidos, peça já!</h1>;
  }

  return <TableDesktop></TableDesktop>;
};

export default Table;
