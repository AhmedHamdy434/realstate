import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const GoHomeMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center md:hidden items-center w-10 h-10">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="w-2.5"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default GoHomeMobile;
