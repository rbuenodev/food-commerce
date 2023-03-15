interface IHeadProps {
  title: string;
  description?: string;
}

const Head: React.FC<IHeadProps> = ({ title, description = "" }) => {
  document.title = `Food Commerce | ${title}`;
  document
    .querySelector("[name=description]")
    ?.setAttribute("content", description);

  return null;
};

export default Head;
