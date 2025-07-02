import { useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./custom-datepicker.css";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateRangeEn } from "../../utiles/formatDateRangeEn";
import useClickOutside from "../../../../shared/hooks/useClickOutside";

export default function DateRangeSelector({
  range,
  setRange,
}: {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}) {
  const dateRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(dateRef, () => setIsOpen(false));

  return (
    <div className="relative w-full flex gap-3 rounded-2xl bg-neutrals8 shadow-depth4">
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="w-8 mt-2 text-neutrals5"
      />
      <div ref={dateRef}>
        <button
          className="block sm:text-lg md:text-xl lg:text-2xl text-neutrals2 font-semibold leading-8 text-nowrap"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {range && range.from && range.to
            ? formatDateRangeEn(
                range.from.toLocaleDateString(),
                range.to.toLocaleDateString()
              )
            : "Date"}
        </button>
        <p className="block sm:hidden lg:block leading-6 text-xs md:text-base text-neutrals4">
          Add date
        </p>
        {isOpen && (
          <div className="absolute bottom-[calc(100%+1.75rem)] start-1/2 -translate-x-1/2 text-sm font-medium z-50 bg-neutrals8 p-4 sm:p-8 lg:p-12 rounded-3xl shadow-depth3 text-neutrals2">
            <DayPicker
              mode="range"
              navLayout="around"
              numberOfMonths={2}
              selected={range}
              onSelect={(newRange) => setRange(newRange)}
              pagedNavigation
              disabled={{ before: new Date() }}
              animate
              classNames={{
                chevron: "fill-neutrals4 w-3.5 mb-4.5",
                months: "flex flex-col md:flex-row md:no-wrap gap-10 lg:gap-20",
                range_start:
                  "bg-neutrals2 rounded-full text-neutrals8 font-medium! text-sm!",
                range_end:
                  "bg-neutrals2  rounded-full text-neutrals8 font-medium! text-sm!",
                range_middle: "bg-neutrals6 font-medium! text-sm!",
                day: "hover:bg-neutrals2 hover:text-neutrals8 hover:rounded-full",
                month_caption: "text-base text-center mb-4",
                weekdays: "text-neutrals4",
                disabled: "text-neutrals5",
                today: "text-neutrals2",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
