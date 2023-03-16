import { currencyFormat } from "../../helpers/currencyFormat";
import PlusIcon from "../@shared/Icons/PlusIcon";
import Skeleton from "../Skeleton";
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
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => (
            <div key={snack.id} className="snack">
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button type="button">
                  <PlusIcon />
                </button>
              </div>
            </div>
          ))}
    </Container>
  );
};

export default Snacks;
