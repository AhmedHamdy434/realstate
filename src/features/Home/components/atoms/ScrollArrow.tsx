import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollArrow = ({
  handleClick,
  direction,
  disabled,
}: {
  handleClick: () => void;
  direction: "left" | "right";

  disabled: boolean;
}) => {
  return (
    <div
      className={`flex justify-center items-center w-10 h-10 rounded-full ${
        disabled ? "" : "border-2 border-neutrals6 cursor-pointer"
      } p-2`}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={direction === "left" ? faArrowLeft : faArrowRight}
        className="w-full text-neutrals4"
      />
    </div>
  );
};

export default ScrollArrow;
