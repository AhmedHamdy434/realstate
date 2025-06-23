import { Link } from "react-router-dom";
import type { MostCardsComponentType } from "../../types/homeTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropertiesCard from "../molecules/PropertiesCard";
import RentCard from "../molecules/RentCard";

const MostSectionComponent = ({
  heading,
  paragraph,
  buyData,
  rentData,
}: MostCardsComponentType) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-end pt-6 lg:pt-30 mb-1.5 lg:mb-12">
        <div className="text">
          <h3 className="text-2xl lg:text-5xl text-main font-semibold leading-14 tracking-[0.5px] mb-2 lg-mb-4">
            {heading}
          </h3>
          <p className="text-maingray leading-6.5 tracking-[0.25%]">
            {paragraph[0]}
            <br className="hidden md:block" />
            {paragraph[1]}
          </p>
        </div>
        <Link
          to="/"
          className="flex px-6 py-3 gap-2 items-center sm:min-w-46 ms-auto text-sm lg:text-lg text-main font-medium leading-6.5 tracking-[0.5px]"
        >
          <span>Learn More</span>
          <div className="w-5 h-5 rounded-full bg-main flex justify-center items-center shadow-[0px_0px_20px_0px_rgba(105,185,157,0.58)]">
            <FontAwesomeIcon icon={faAngleRight} className="text-white w-2" />
          </div>
        </Link>
      </div>
      <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8.5 mb-20.5 lg:mb-46.5">
        {buyData &&
          buyData.map((propDetails) => (
            <PropertiesCard key={propDetails.image} details={propDetails} />
          ))}
        {rentData &&
          rentData.map((rentDetails, index) => (
            <RentCard
              key={`${rentDetails.name}${index}`}
              details={rentDetails}
            />
          ))}
      </div>
    </div>
  );
};

export default MostSectionComponent;
