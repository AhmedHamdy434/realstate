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
      className="bg-main w-[17rem] h-[3.0625rem] rounded-[1.25rem] font-medium text-lg align-middle text-center text-white"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

export default MainButton;
