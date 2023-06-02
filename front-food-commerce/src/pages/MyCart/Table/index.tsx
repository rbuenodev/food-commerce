import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";

const Table: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const { cart } = useCart();

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }

    window.addEventListener("resize", updateTableComponentBasedInWindowWidth);

    return () => {
      window.removeEventListener(
        "resize",
        updateTableComponentBasedInWindowWidth
      );
    };
  }, []);

  if (cart.length === 0) {
    return <h1>Ops! parece que você não tem pedido, peça já!</h1>;
  }

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
};

export default Table;
