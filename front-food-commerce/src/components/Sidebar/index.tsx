import BurguerIcon from "../@shared/Icons/BurguerIcon";
import IceCreemIcon from "../@shared/Icons/IceCreemIcon";
import MenuIcon from "../@shared/Icons/MenuIcon";
import PizzaIcon from "../@shared/Icons/PizzaIcon";
import SodaIcon from "../@shared/Icons/SodaIcon";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <button type="button">
        <MenuIcon isImg={true} alt="open and close menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#!">
              <BurguerIcon isImg={false} />
              <span>Hambúrgueres</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <PizzaIcon isImg={false} />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <SodaIcon isImg={false} />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <IceCreemIcon isImg={false} />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Sidebar;
