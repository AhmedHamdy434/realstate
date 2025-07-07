import { Link } from "react-router-dom";
import type { MostCardsComponentType } from "../../types/homeTypes";
import RentCard from "../../../../shared/components/molecules/RentCard";
import PropertiesCard from "../../../../shared/components/molecules/PropertiesCard";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

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
          <SvgIcon iconName="ArrowRightCircle" svgProp={{ width: "1.25rem" }} />
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
