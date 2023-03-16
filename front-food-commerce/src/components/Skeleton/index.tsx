import { SkeletonElement } from "./styles";

interface ISkeletonProps {
  type: "title" | "text" | "image" | "thumbnail";
}

const Skeleton: React.FC<ISkeletonProps> = ({ type }) => {
  return <SkeletonElement type={type} />;
};

export default Skeleton;
