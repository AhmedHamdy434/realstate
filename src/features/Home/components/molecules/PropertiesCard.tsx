import RecButton from "../../../../shared/components/atoms/RecButton";
import type { PropDetailsType } from "../../types/homeTypes";

const PropertiesCard = ({ details }: { details: PropDetailsType }) => {
  const { image, city, country, price, currency, area, type } = details;

  return (
    <div className="p-3 lg:p-4 border border-[rgba(222,220,218,1)] leading-6.5 tracking-[-0.25%]">
      <img
        src={image}
        alt="card image"
        loading="lazy"
        className="pb-3 lg:pb-4 object-contain"
      />
      <h4 className="text-title text-xl lg:text-2xl font-semibold mb-1.5 lg:mb-2">
        {city}
      </h4>
      <span className="block text-sm lg:text-base text-lighttext mb-3 lg:mb-4">
        {country}
      </span>
      <div className="flex gap-2 justify-between items-center mb-5 lg:mb-7">
        <span className="block text-main lg:text-2xl font-semibold leading-8">
          {price} {currency}
        </span>
        <div className="area leading-6 text-sm lg:text-base text-title bg-[rgb(245,245,245)] px-2 py-1 w-fit">
          {area} m<span className="align-super text-xs">2</span>
          <span className="text-lighttext"> {type}</span>
        </div>
      </div>
      <RecButton buttonName="Send Inquiry" colored className="w-full" />
    </div>
  );
};

export default PropertiesCard;
