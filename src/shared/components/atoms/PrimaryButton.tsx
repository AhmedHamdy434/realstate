const PrimaryButton = ({
  buttonName,
  colored = false,
  className = "",
  handleClick,
}: {
  buttonName: string;
  colored?: boolean;
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`text-sm font-bold px-4 py-3 rounded-[5.75rem] ${className} ${
        colored
          ? "bg-primary1 text-neutrals8"
          : "text-neutrals2 border-2 border-neutrals6"
      }`}
    >
      {buttonName}
    </button>
  );
};

export default PrimaryButton;
