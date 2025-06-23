import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LandingDataType } from "../../types/homeTypes";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const InputLanding = ({ data }: { data: LandingDataType }) => {
  const { head, placeholder } = data;
  return (
    <div className="sm:text-lg leading-6 tracking-[0.25%]">
      <span className="block pe-8 mb-2">{head}</span>
      <div className="flex justify-between items-center gap-2">
        <span className="block text-[rgb(166,166,166)]">{placeholder}</span>
        <FontAwesomeIcon icon={faAngleDown} className="w-6" />
      </div>
    </div>
  );
};

export default InputLanding;
