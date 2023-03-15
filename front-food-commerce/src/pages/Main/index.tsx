import { Outlet } from "react-router-dom";
import LogoIcon from "../../components/@shared/Icons/LogoIcon";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <LogoIcon isImg={true} />
        <Outlet />
      </section>
    </Container>
  );
};

export default Main;
