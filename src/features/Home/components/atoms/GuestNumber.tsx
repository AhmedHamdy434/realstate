import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TravelerType } from "../../types/homeTypes";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon
            icon={faMinusCircle}
            className={`w-6 cursor-pointer ${
              travelers === 0 ? "text-neutrals6" : "text-neutrals5"
            }`}
            onClick={() => handleChange(key, "decrement")}
          />
          <span className="font-medium text-neutrals2">{travelers} </span>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="w-6 text-neutrals5 cursor-pointer"
            onClick={() => handleChange(key, "increment")}
          />
        </div>
      </div>

      {paragraph[0] !== "Baby" && <hr className="text-neutrals6 mt-4" />}
    </>
  );
};

export default GuestNumber;
