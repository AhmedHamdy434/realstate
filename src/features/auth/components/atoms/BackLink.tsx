import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackLink = ({ value, goto }: { value: string; goto: string }) => {
  return (
    <Link to={goto} className="flex justify-center mt-8 items-center gap-1.5">
      <FontAwesomeIcon icon={faArrowLeft} className="w-7" />
      <span className="text-xl">{value}</span>
    </Link>
  );
};

export default BackLink;
