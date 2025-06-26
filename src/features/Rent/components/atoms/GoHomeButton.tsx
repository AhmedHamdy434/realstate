import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <ButtonWithIcon2
      buttonName="Go home"
      flip
      classNameButton="hidden md:flex"
      icon={faChevronLeft}
      classNameIcon="w-1"
      handleClick={() => navigate("/")}
    />
  );
};

export default GoHomeButton;
