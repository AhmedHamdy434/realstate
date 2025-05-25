import type { InputType } from "../../types/authTypes";
import MainInput from "../atoms/MainInput";

const MainLabelAndInput = ({
  hasError,
  label,
  inputData,
  handleChange,
}: {
  hasError: boolean;
  label: string;
  inputData: InputType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label className="text-xl leading-5 tracking-[-2%] block text-start mb-1.5">
        {label}
        {hasError && <span className="text-error text-sm"> required</span>}
      </label>
      <MainInput handleChange={handleChange} inputData={inputData} />
    </>
  );
};

export default MainLabelAndInput;
