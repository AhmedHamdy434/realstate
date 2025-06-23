import { useState } from "react";
import type { InputType } from "../../types/authTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const MainInput = ({
  inputData,
  handleChange,
}: {
  inputData: InputType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { placeholder, name, type } = inputData;
  const [hiddenPassword, setHiddenPassword] = useState(true);
  return (
    <div className="relative w-full max-w-[28.125rem]">
      <input
        type={hiddenPassword ? type : "text"}
        className="h-14 w-full rounded-xl border border-text2 ps-4 text-xl leading-5 tracking-[-2%] placeholder:text-text2"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
      {name === "password" && (
        <FontAwesomeIcon
          icon={hiddenPassword ? faEyeSlash : faEye}
          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer w-6"
          onClick={() => setHiddenPassword(!hiddenPassword)}
        />
      )}
    </div>
  );
};

export default MainInput;
