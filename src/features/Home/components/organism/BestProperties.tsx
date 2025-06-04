import { Link } from "react-router-dom";
import PropertyImage1 from "../../../../assets/test/property01.png";
import PropertyImage2 from "../../../../assets/test/property02.png";
import PropertyImage3 from "../../../../assets/test/property03.png";
import ArrowRight from "../../../../assets/arrow RightCircle.png";
import PropertiesCard from "../molecules/PropertiesCard";

const BestProperties = () => {
  const propsDetails = [
    {
      image: PropertyImage1,
      city: "Giza , Cairo",
      country: "Egypt",
      price: "1,000,000",
      currency: "EGP",
      area: "360",
      type: "Living Area",
    },
    {
      image: PropertyImage2,
      city: "Giza , Cairo",
      country: "Egypt",
      price: "1,000,000",
      currency: "EGP",
      area: "360",
      type: "Living Area",
    },
    {
      image: PropertyImage3,
      city: "Giza , Cairo",
      country: "Egypt",
      price: "1,000,000",
      currency: "EGP",
      area: "360",
      type: "Living Area",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end pt-[7.75rem] mb-12">
        <div className="text">
          <h3 className="text-5xl text-main font-semibold leading-14 tracking-[0.5px] mb-4">
            Best Properties
          </h3>
          <p className="text-maingray leading-[1.625rem] tracking-[0.25%]">
            Discover our exclusive selection of the finest one-of-a-kind{" "}
            <br className="hidden md:block" />
            luxury properties architectural masterpieces.
          </p>
        </div>
        <Link
          to="/"
          className="flex px-6 py-3 gap-2 items-center min-w-[11.5rem] ms-auto text-lg text-main font-medium leading-[1.625rem] tracking-[0.5px]"
        >
          <span>Learn More</span>
          <img
            src={ArrowRight}
            alt="arrow right"
            className="shadow-[0px_0px_20px_0px_rgba(105,185,157,0.58)]"
          />
        </Link>
      </div>
      <div className="cards grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2.125rem] mb-[11.625rem]">
        {propsDetails.map((propDetails) => (
          <PropertiesCard key={propDetails.image} details={propDetails} />
        ))}
      </div>
    </div>
  );
};

export default BestProperties;
/*









*/
