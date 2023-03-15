import { ReactNode } from "react";
import { Title } from "./styles";

interface ITitleProps {
  children: ReactNode;
}
const SnackTitle: React.FC<ITitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default SnackTitle;
