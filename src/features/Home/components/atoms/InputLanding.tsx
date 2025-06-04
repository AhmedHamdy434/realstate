import ArrowDown from "../../../../assets/arrow Down.svg";
import type { LandingDataType } from "../../types/homeTypes";
const InputLanding = ({ data }: { data: LandingDataType }) => {
  const { head, placeholder } = data;
  return (
    <div className="sm:text-lg leading-6 tracking-[0.25%]">
      <span className="block pe-8 mb-2">{head}</span>
      <div className="flex justify-between gap-2">
        <span className="block text-[rgb(166,166,166)]">{placeholder}</span>
        <img src={ArrowDown} alt="arrow down" />
      </div>
    </div>
  );
};

export default InputLanding;
