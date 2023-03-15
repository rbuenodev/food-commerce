import img, {
  ReactComponent as Icon,
} from "../../../assets/burger-and-soda.svg";

interface IIconProps {
  isImg: boolean;
  alt?: string;
}

const BurgerAndSodaIcon: React.FC<IIconProps> = ({ isImg, alt }) => {
  return isImg ? <img src={img} alt={alt} /> : <Icon />;
};

export default BurgerAndSodaIcon;
