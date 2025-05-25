import { Link } from "react-router-dom";
import Vector from "../../../../assets/auth/vector.png";

const BackLink = ({ value, goto }: { value: string; goto: string }) => {
  return (
    <Link to={goto} className="flex justify-center mt-8 items-center gap-1.5">
      <img src={Vector} alt="vector" width={13} height={9.54} />
      <span className="text-xl">{value}</span>
    </Link>
  );
};

export default BackLink;
