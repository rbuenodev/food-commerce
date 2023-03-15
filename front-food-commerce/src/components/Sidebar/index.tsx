import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurguerIcon from "../@shared/Icons/BurguerIcon";
import IceCreemIcon from "../@shared/Icons/IceCreemIcon";
import MenuIcon from "../@shared/Icons/MenuIcon";
import PizzaIcon from "../@shared/Icons/PizzaIcon";
import SodaIcon from "../@shared/Icons/SodaIcon";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <MenuIcon isImg={true} alt="open and close menu" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BurguerIcon isImg={false} />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pizzas">
              <PizzaIcon isImg={false} />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/drinks">
              <SodaIcon isImg={false} />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/icecreams">
              <IceCreemIcon isImg={false} />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Sidebar;
