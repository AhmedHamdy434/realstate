import RecButton from "../../../../shared/components/atoms/RecButton";
import type { PropDetailsType } from "../../types/homeTypes";

const PropertiesCard = ({ details }: { details: PropDetailsType }) => {
  const { image, city, country, price, currency, area, type } = details;

  return (
    <div className="p-4 border-[1px] border-[rgba(222,220,218,1)] leading-[1.625rem] tracking-[-0.25%]">
      <img
        src={image}
        alt="card image"
        loading="lazy"
        className="pb-4 object-contain"
      />
      <h4 className="text-title text-2xl font-semibold mb-2">{city}</h4>
      <span className="block text-lighttext mb-4">{country}</span>
      <div className="flex flex-col gap-2 xs:flex-row justify-between xs:items-center mb-[1.75rem]">
        <span className="block text-main text-2xl font-semibold leading-8">
          {price} {currency}
        </span>
        <div className="area leading-6 text-title bg-[rgb(245,245,245)] px-2 py-1 w-fit">
          {area} m<span className="align-super text-xs">2</span>
          <span className="text-lighttext"> {type}</span>
        </div>
      </div>
      <RecButton buttonName="Send Inquiry" colored className="w-full" />
    </div>
  );
};

export default PropertiesCard;
