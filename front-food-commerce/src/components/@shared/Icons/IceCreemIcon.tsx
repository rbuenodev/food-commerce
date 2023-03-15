import img, { ReactComponent as Icon } from "../../../assets/ice-cream.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const IceCreemIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default IceCreemIcon;
