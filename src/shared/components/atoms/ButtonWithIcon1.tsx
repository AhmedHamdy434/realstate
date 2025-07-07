import type { ButtonWithIconType } from "../../types/sharedTypes";
import SvgIcon from "./SvgIcon";

const ButtonWithIcon1 = ({
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
      className={`text-neutrals2 font-bold px-6 py-4 rounded-[5.625rem] border-2 border-neutrals6 flex items-center gap-3 ${classNameButton} ${
        flip ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span>{buttonName}</span>
      {icon && (
        <div className="flex justify-center items-center w-4 h-4">
          <SvgIcon iconName={icon} wrapperStyle={classNameIcon} />
        </div>
      )}
    </button>
  );
};

export default ButtonWithIcon1;
