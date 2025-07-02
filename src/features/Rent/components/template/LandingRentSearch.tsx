import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "../../../../assets/user/image.png";
import DateRangeSelector from "../../../Home/components/atoms/DateRangeSelector";
import LocationSelector from "../../../Home/components/atoms/LocationSelector";
import TravelersSelector from "../../../Home/components/atoms/TravelersSelector";
import type { RentSearchDataType } from "../../types/rentTypes";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LandingRentSearch = ({
  searchData,
}: {
  searchData: RentSearchDataType;
}) => {
  const {
    city,
    setCity,
    range,
    setRange,
    travelers,
    setTravelers,
    searchParams,
    setSearchParams,
  } = searchData;
  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("city", city);
    newParams.set("adults", travelers.adults.toString());
    newParams.set("children", travelers.children.toString());
    newParams.set("baby", travelers.baby.toString());
    newParams.set(
      "from",
      range?.from?.toLocaleDateString() || new Date().toLocaleDateString()
    );
    newParams.set(
      "to",
      range?.to?.toLocaleDateString() || new Date().toLocaleDateString()
    );
    setSearchParams(newParams);
  };
  return (
    <div className="mx-4 md:mx-10 xl:mx-20 relative md:mb-25">
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
        className="text-neutrals1 tracking-[-2%] bg-no-repeat bg-cover rounded-3xl bg-center min-h-175 md:min-h-147 flex flex-col gap-4 items-center
          text-center"
      >
        <h2 className="mt-15 text-[4rem] font-bold md:mt-32 md:text-8xl">
          South Island
        </h2>
        <h5 className="font-medium leading-6 md:text-2xl md:leading-8 md:font-normal">
          New Zealand
        </h5>
      </div>
      <div
        className="absolute w-[80vw] left-0 bottom-0 md:translate-y-1/2 flex flex-col sm:flex-row justify-between items-center mx-4 text-neutrals1 md:mx-10 xl:mx-20 rounded-[1.25rem] md:rounded-lg border border-neutrals8
       bg-neutrals8 p-5 md:p-6 shadow-glass1 backdrop-blur-glass01"
      >
        <div className="flex-1 flex flex-col sm:flex-row gap-7.5 justify-between items-center">
          <LocationSelector search={city} setSearch={setCity} />
          <DateRangeSelector range={range} setRange={setRange} />
          <TravelersSelector
            travelers={travelers}
            setTravelers={setTravelers}
          />
        </div>
        <div
          className="w-16 h-16 rounded-full bg-main flex justify-center items-center cursor-pointer"
          onClick={handleSearch}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute opacity-0 sm:relative sm:opacity-100 shadow-[0px_0px_65px_0px_rgba(105,185,157,0.32)] w-5 text-neutrals8"
          />
          <span className="sm:hidden text-neutrals8">Search</span>
        </div>
      </div>
    </div>
  );
};

export default LandingRentSearch;
