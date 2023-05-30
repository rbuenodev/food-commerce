import { Outlet } from "react-router-dom";
import LogoIcon from "../../components/@shared/Icons/LogoIcon";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";
import MyOrder from "../../components/MyOrder";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <LogoIcon isImg={true} />
        <Outlet />
      </section>
      <MyOrder/>
    </Container>
  );
};

export default Main;
