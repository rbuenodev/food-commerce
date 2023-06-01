import img, { ReactComponent as Icon } from "../../../assets/circle-plus.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const CirclePlusIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};
export default CirclePlusIcon;
