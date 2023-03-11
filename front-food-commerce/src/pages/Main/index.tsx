import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <h1>Main</h1>
    </Container>
  );
};

export default Main;
