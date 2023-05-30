import { currencyFormat } from "../../helpers/currencyFormat";
import { useCart } from "../../hooks/useCart";
import PlusIcon from "../@shared/Icons/PlusIcon";
import SkeletonSnack from "./SkeletonSnack";
import { Container } from "./styles";

interface ISnacksProps {
  snacks: ISnack[];
}

interface ISnack {
  id: number;
  snack: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Snacks: React.FC<ISnacksProps> = ({ snacks }) => {
  const { cart, addSnackIntoCart } = useCart();

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackExistent = cart.find(
              (item) => item.id === snack.id && item.snack === snack.snack
            );
            return (
              <div key={snack.id} className="snack">
                {snackExistent && <span>{snackExistent.quantity}</span>}

                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type="button" onClick={() => addSnackIntoCart(snack)}>
                    <PlusIcon />
                  </button>
                </div>
              </div>
            );
          })}
    </Container>
  );
};

export default Snacks;
