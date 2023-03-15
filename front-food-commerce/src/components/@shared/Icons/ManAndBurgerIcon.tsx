import img, {
  ReactComponent as Icon,
} from "../../../assets/man-and-burger.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const ManAndBurgerIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};
export default ManAndBurgerIcon;
