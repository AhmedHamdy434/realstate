import { useRef } from "react";
import type { VerificationCodeInputProps } from "../../types/authTypes";

const SpecialInputs = ({ code, setCode }: VerificationCodeInputProps) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 5) inputsRef.current[index + 1]?.focus();
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      if (index > 0) inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex my-10 px-4 max-w-3xl justify-between space-x-2 md:space-x-5">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <input
            autoFocus={index === 0}
            key={index}
            type="text"
            maxLength={1}
            ref={(el) => {
              inputsRef.current[index] = el!;
            }}
            onChange={(e) => handleChange(e, index)}
            className="aspect-square min-w-[2.5rem] max-w-[5.625rem] text-center border-[3px] border-text2 rounded-[1.25rem] text-3xl sm:text-5xl"
          />
        ))}
    </div>
  );
};

export default SpecialInputs;
