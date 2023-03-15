import img, { ReactComponent as Icon } from "../../../assets/logo.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const LogoIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};
export default LogoIcon;
