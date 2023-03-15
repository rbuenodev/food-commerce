import PlusIcon from "../@shared/Icons/PlusIcon";
import { Container } from "./styles";

interface ISnacksProps {
  snacks: any[];
}

const Snacks: React.FC<ISnacksProps> = ({ snacks }) => {
  return (
    <Container>
      {snacks.map((snack) => (
        <div key={snack.id} className="snack">
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{snack.price}</strong>
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
