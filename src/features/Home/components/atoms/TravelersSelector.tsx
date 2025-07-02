import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import type { TravelerType } from "../../types/homeTypes";
import GuestNumber from "./GuestNumber";
import useClickOutside from "../../../../shared/hooks/useClickOutside";

const TravelersSelector = ({
  travelers,
  setTravelers,
}: {
  travelers: Record<TravelerType, number>;
  setTravelers: React.Dispatch<
    React.SetStateAction<Record<TravelerType, number>>
  >;
}) => {
  const travelersRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (
    type: TravelerType,
    action: "increment" | "decrement"
  ) => {
    setTravelers((prev) => {
      const newValue =
        action === "increment" ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      return {
        ...prev,
        [type]: newValue,
      };
    });
  };

  useClickOutside(travelersRef, () => setIsOpen(false));

  return (
    <div className="relative w-full flex gap-3 rounded-2xl bg-neutrals8 shadow-depth4">
      <FontAwesomeIcon icon={faUser} className="w-8 mt-2 text-neutrals5" />
      <div ref={travelersRef}>
        <button
          className="block text-lg md:text-xl lg:text-2xl text-neutrals2 font-semibold leading-8"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {travelers.adults || travelers.children || travelers.baby
            ? `${travelers.adults + travelers.children + travelers.baby} ${
                travelers.adults + travelers.children + travelers.baby === 1
                  ? "guest"
                  : "guests"
              }`
            : "Travelers"}
        </button>
        <p className="block sm:hidden lg:block leading-6 text-xs md:text-base text-neutrals4">
          Add guests
        </p>
        {isOpen && (
          <div
            className="absolute bottom-[calc(100%+1.75rem)] end-0 text-sm font-medium z-50 bg-neutrals8 p-10 rounded-3xl shadow-depth3 w-full sm:w-[90vw] max-w-106.5
            text-neutrals2 flex flex-col gap-6"
          >
            <GuestNumber
              travelers={travelers.adults}
              handleChange={handleChange}
              paragraph={paragraphs[0]}
            />
            <GuestNumber
              travelers={travelers.children}
              handleChange={handleChange}
              paragraph={paragraphs[1]}
            />
            <GuestNumber
              travelers={travelers.baby}
              handleChange={handleChange}
              paragraph={paragraphs[2]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelersSelector;

const paragraphs = [
  ["Adults", "Ages 13 or above"],
  ["Children", "Ages 2 - 12"],
  ["Baby", "Under 2"],
];
