import type { TravelerType } from "../../types/homeTypes";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const GuestNumber = ({
  travelers,
  handleChange,
  paragraph,
}: {
  travelers: number;
  handleChange: (type: TravelerType, action: "increment" | "decrement") => void;
  paragraph: string[];
}) => {
  const key = paragraph[0].toLowerCase() as TravelerType;

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h6 className="font-medium leading-6">{paragraph[0]}</h6>
          <p className="text-xs text-neutrals4 leading-5">{paragraph[1]}</p>
        </div>
        <div className="flex gap-4 items-center">
          <SvgIcon
            iconName="MinusLine"
            wrapperStyle={`${travelers === 0 ? "" : "cursor-pointer"}`}
            svgProp={{ width: "1.5rem", opacity: travelers === 0 ? 0.2 : 1 }}
            handleClick={
              travelers === 0 ? undefined : () => handleChange(key, "decrement")
            }
          />
          <span className="font-medium text-neutrals2">{travelers} </span>
          <SvgIcon
            iconName="PlusLine"
            wrapperStyle="cursor-pointer text-red-500 fill-red-500"
            svgProp={{ width: "1.5rem", fill: "red" }}
            handleClick={() => handleChange(key, "increment")}
          />
        </div>
      </div>

      {paragraph[0] !== "Baby" && <hr className="text-neutrals6 mt-4" />}
    </>
  );
};

export default GuestNumber;
