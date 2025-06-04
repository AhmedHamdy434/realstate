const MainButton = ({
  buttonName,
  type,
  handleClick,
}: {
  buttonName: string;
  type?: "submit";
  handleClick?: () => void;
}) => {
  return (
    <button
      type={type ? type : "button"}
      className="bg-main w-68 h-12 rounded-[1.25rem] font-medium text-lg align-middle text-center text-white"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

export default MainButton;
