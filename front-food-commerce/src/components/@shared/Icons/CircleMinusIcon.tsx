import img, { ReactComponent as Icon } from "../../../assets/circle_minus.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const CircleMinusIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};
export default CircleMinusIcon;
