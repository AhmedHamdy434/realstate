import { Link } from "react-router-dom";

const BackLink = ({ value, goto }: { value: string; goto: string }) => {
  return (
    <Link to={goto} className="flex justify-center mt-8 items-center gap-1.5">
      <span className="text-xl">{value}</span>
    </Link>
  );
};

export default BackLink;
