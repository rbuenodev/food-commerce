import img, { ReactComponent as Icon } from "../../../assets/shopping-cart.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const ShoppingCartIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default ShoppingCartIcon;
