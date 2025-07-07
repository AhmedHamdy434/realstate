import SvgIcon from "./SvgIcon";

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
      <SvgIcon
        iconName={direction === "left" ? "ArrowLeftLine" : "ArrowRightLine"}
      />
    </div>
  );
};

export default ScrollArrow;
