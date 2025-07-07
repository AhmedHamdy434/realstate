import DateRangeSelector from "../atoms/DateRangeSelector";
import LocationSelector from "../atoms/LocationSelector";
import { useNavigate } from "react-router-dom";
import TravelersSelector from "../atoms/TravelersSelector";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import type { TravelerType } from "../../types/homeTypes";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const InputSearch = () => {
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState("");
  const [range, setRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [travelers, setTravelers] = useState<Record<TravelerType, number>>({
    adults: 0,
    children: 0,
    baby: 0,
  });

  return (
    <>
      <div className="flex-1 flex flex-col sm:flex-row gap-7.5 sm:gap-1 lg:gap-7.5 justify-between items-center">
        <LocationSelector search={searchCity} setSearch={setSearchCity} />
        <DateRangeSelector range={range} setRange={setRange} />
        <TravelersSelector travelers={travelers} setTravelers={setTravelers} />
      </div>
      <div
        className="w-fit mt-7.5 sm:mt-0 px-4 py-3 sm:p-0 sm:w-16 sm:h-16 rounded-md sm:rounded-full bg-main flex justify-center items-center cursor-pointer"
        onClick={() =>
          navigate(
            `/rentsearch?city=${encodeURIComponent(searchCity)}&adults=${
              travelers.adults
            }&children=${travelers.children}&baby=${travelers.baby}&from=${
              range?.from?.toLocaleDateString() || new Date()
            }
              &to=${range?.to?.toLocaleDateString() || new Date()}`
          )
        }
      >
        <SvgIcon
          iconName="Search"
          wrapperStyle="absolute hidden sm:block sm:relative sm:opacity-100 shadow-[0px_0px_65px_0px_rgba(105,185,157,0.32)]"
          svgProp={{ width: "1.5rem" }}
        />
        <span className="sm:hidden text-neutrals8">Search</span>
      </div>
    </>
  );
};

export default InputSearch;
