import Header from "../../../shared/components/template/Header";
import LandingRentSearch from "../components/template/LandingRentSearch";
import RentSearchResults from "../components/template/RentSearchResults";
import SuperHost from "../components/template/SuperHost";

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
