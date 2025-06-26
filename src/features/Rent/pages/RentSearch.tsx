import Header from "../../../shared/components/template/Header";
import LandingRentSearch from "../components/organism/LandingRentSearch";
import RentSearchResults from "../components/organism/RentSearchResults";
import SuperHost from "../components/organism/SuperHost";

const RentSearch = () => {
  return (
    <>
      <Header currentPage="Property" />
      <LandingRentSearch />
      <RentSearchResults />
      <SuperHost />
    </>
  );
};

export default RentSearch;
