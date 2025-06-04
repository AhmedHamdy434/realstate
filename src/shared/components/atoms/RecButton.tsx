const RecButton = ({
  buttonName,
  colored,
  className = "",
  handleClick,
}: {
  buttonName: string;
  colored: boolean;
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`leading-6 tracking-[0.25%] font-medium px-12 py-4 ${className} ${
        colored
          ? "bg-main text-white"
          : "bg-white text-main border-[1px] border-black"
      }`}
    >
      {buttonName}
    </button>
  );
};

export default RecButton;
