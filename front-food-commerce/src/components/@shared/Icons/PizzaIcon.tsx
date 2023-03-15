import img, { ReactComponent as Icon } from "../../../assets/pizza.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const PizzaIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default PizzaIcon;
