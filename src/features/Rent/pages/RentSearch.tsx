import { useSearchParams } from "react-router-dom";
import Header from "../../../shared/components/template/Header";
import LandingRentSearch from "../components/template/LandingRentSearch";
import RentSearchResults from "../components/template/RentSearchResults";
import SuperHost from "../components/template/SuperHost";
import { useState } from "react";
import type { TravelerType } from "../../Home/types/homeTypes";
import type { DateRange } from "react-day-picker";

const RentSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") || "");
  const adults = searchParams.get("adults") || "";
  const children = searchParams.get("children") || "";
  const baby = searchParams.get("baby") || "";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const [range, setRange] = useState<DateRange | undefined>({
    from: from ? new Date(from) : new Date(),
    to: to ? new Date(to) : new Date(),
  });
  const [travelers, setTravelers] = useState<Record<TravelerType, number>>({
    adults: parseInt(adults),
    children: parseInt(children),
    baby: parseInt(baby),
  });

  const searchData = {
    city,
    setCity,
    range,
    setRange,
    travelers,
    setTravelers,
    searchParams,
    setSearchParams,
  };

  return (
    <>
      <Header currentPage="Property" />
      <LandingRentSearch searchData={searchData} />
      <RentSearchResults />
      <SuperHost />
    </>
  );
};

export default RentSearch;
