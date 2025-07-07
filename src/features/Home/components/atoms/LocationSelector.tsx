import { useState } from "react";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const LocationSelector = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full flex gap-3 rounded-2xl bg-neutrals8 shadow-depth4">
      <SvgIcon
        iconName="LocationLine"
        wrapperStyle="mt-1.5"
        svgProp={{ width: "2rem" }}
      />
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Location"
          className="w-full text-lg md:text-xl lg:text-2xl text-neutrals2 placeholder:text-neutrals2 font-semibold leading-8"
        />
        <p className="block sm:hidden lg:block leading-6 text-xs md:text-base text-neutrals4">
          Where are you going?
        </p>
      </div>
      {isFocused && search.length > 0 && (
        <SvgIcon
          iconName="CloseCircleLine"
          wrapperStyle="mt-1.5 top-0 end-0 cursor-pointer"
          svgProp={{ width: "1.75rem" }}
          handleClick={() => setSearch("")}
        />
      )}
      {isFocused && search.length > 0 && filteredCities.length > 0 && (
        <ul className="absolute bottom-[calc(100%+1.75rem)] start-0 z-40 w-full bg-neutrals8 rounded-3xl shadow-depth3 p-2 max-h-75 overflow-y-hidden">
          {filteredCities.map((city, idx) => (
            <li
              key={idx}
              className="p-3 rounded-[0.75rem] font-medium text-neutrals4 leading-6 hover:bg-neutrals7 hover:text-neutrals2 cursor-pointer"
              onClick={() => {
                setSearch(city);
                setIsFocused(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSelector;
const cities = [
  "Cairo",
  "Alexandria",
  "Aswan",
  "Giza",
  "Luxor",
  "Mansoura",
  "Tanta",
  "Zagazig",
  "Hurghada",
  "Sharm El-Sheikh",
];
