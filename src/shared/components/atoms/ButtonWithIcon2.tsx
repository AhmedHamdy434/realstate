import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonWithIconType } from "../../types/sharedTypes";

const ButtonWithIcon2 = ({
  buttonName,
  flip = false,
  classNameButton = "",
  classNameIcon = "",
  icon,
  handleClick,
}: ButtonWithIconType) => {
  return (
    <button
      onClick={handleClick}
      className={`text-neutrals2 text-sm font-bold px-4 py-3 rounded-[5.625rem] border-2 border-neutrals6 flex items-center gap-3 ${classNameButton} ${
        flip ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span>{buttonName}</span>
      {icon && (
        <div className="flex justify-center items-center w-4 h-4">
          <FontAwesomeIcon
            icon={icon}
            className={`text-neutrals4 ${classNameIcon}`}
          />
        </div>
      )}
    </button>
  );
};

export default ButtonWithIcon2;
