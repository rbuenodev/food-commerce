import img, { ReactComponent as Icon } from "../../../assets/menu.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const MenuIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default MenuIcon;
