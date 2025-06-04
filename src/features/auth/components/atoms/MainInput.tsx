import { useState } from "react";
import Eye from "../../../../assets/auth/eye.png";
import type { InputType } from "../../types/authTypes";

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
        <img
          onClick={() => setHiddenPassword(!hiddenPassword)}
          src={Eye}
          alt="Eye"
          width={24}
          height={24}
          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  );
};

export default MainInput;
