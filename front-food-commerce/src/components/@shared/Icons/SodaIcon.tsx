//import Icon from "../../../assets/soda.svg";
import img, { ReactComponent as Icon } from "../../../assets/soda.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const SodaIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default SodaIcon;
