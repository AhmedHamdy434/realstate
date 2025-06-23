import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DropMenuType } from "../../types/sharedTypes";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const DropMenu = ({
  value,
  setValue,
  valuesList,
  className1,
  className2,
}: DropMenuType) => {
  const valueRef = useRef<HTMLDivElement>(null);
  const [valueMenu, setValueMenu] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (valueRef.current && !valueRef.current.contains(e.target as Node))
        setValueMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });
  return (
    <div
      className={`flex justify-between items-center gap-2 relative cursor-pointer ${className1}`}
      onClick={() => setValueMenu(!valueMenu)}
      ref={valueRef}
    >
      <span className="block">{value}</span>
      <FontAwesomeIcon icon={faAngleDown} className="w-6" />
      {valueMenu && (
        <div
          className={`absolute top-full end-0 z-30 min-w-full rounded-3xl space-y-1 bg-neutrals8 ${className2}`}
        >
          {valuesList.map((val) => (
            <div
              key={val}
              className={`${
                val !== value ? "text-neutrals5" : ""
              } cursor-pointer`}
              onClick={() => setValue(val)}
            >
              {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropMenu;
