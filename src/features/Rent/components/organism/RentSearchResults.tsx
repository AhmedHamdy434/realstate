import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import RentImage from "../../../../assets/test/property01.png";
import { useState } from "react";
import RentCard from "../../../Home/components/molecules/RentCard";
import ButtonWithIcon1 from "../../../../shared/components/atoms/ButtonWithIcon1";
import GoHomeButton from "../atoms/GoHomeButton";
import GoHomeMobile from "../atoms/GoHomeMobile";

const RentSearchResults = () => {
  const [rentToShow, setRentToShow] = useState(rentDataArray);
  const [moreLoading, setMoreLoading] = useState(false);
  const handleShowMore = () => {
    setMoreLoading(true);
    const newDataToShow = [...rentToShow, ...rentDataArray];
    setRentToShow(newDataToShow);
    setMoreLoading(false);
  };
  return (
    <div className="container text-neutrals2 pt-12">
      <GoHomeButton />
      <div className="flex md:pt-12 justify-between">
        <div className="flex gap-3">
          <GoHomeMobile />
          <h4 className="text-[2rem] md:text-5xl leading-10 md:leading-14 font-bold mb-3">
            Places to stay
          </h4>
        </div>
        <ButtonWithIcon1
          buttonName="Advanced filter"
          classNameButton="hidden md:flex"
          icon={faPlus}
          classNameIcon="w-2.25"
        />
      </div>
      <div className="flex items-center gap-4 ps-13 md:ps-0">
        <span className="text-primary4 p-2 border-4 border-primary4 rounded-sm text-xs uppercase font-bold">
          300+ stays
        </span>
        <span className="font-medium">May 1 - 14, 2 guests</span>
      </div>
      <hr className="text-neutrals6 my-8" />
      <h4 className="text-[2rem] leading-10 font-bold ">Over 300 stays</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8.5 py-8 md:py-12">
        {rentToShow.map((rentDetails, index) => (
          <RentCard key={`${rentDetails.name}${index}`} details={rentDetails} />
        ))}
      </div>
      <ButtonWithIcon1
        buttonName="Show more"
        classNameButton="mx-auto"
        flip
        icon={moreLoading ? faSpinner : undefined}
        classNameIcon="w-3.5"
        handleClick={handleShowMore}
      />
    </div>
  );
};

export default RentSearchResults;

const rentData = {
  image: RentImage,
  host: "superhost",
  name: "Entire serviced classy mountain house",
  oldPrice: "356",
  newPrice: "267",
  currency: "EGY",
  amenities: ["Free wifi", "Breakfast included"],
  total: "200",
  rating: "4.8",
  reviews: "12",
};
const rentDataArray = Array.from({ length: 9 }, () => ({ ...rentData }));
