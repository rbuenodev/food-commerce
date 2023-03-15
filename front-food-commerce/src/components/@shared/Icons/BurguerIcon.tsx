import img, { ReactComponent as Icon } from "../../../assets/burger.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const BurguerIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default BurguerIcon;
