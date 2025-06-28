import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RentDetailsType } from "../../../features/Home/types/homeTypes";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RentCard = ({ details }: { details: RentDetailsType }) => {
  const {
    image,
    host,
    name,
    oldPrice,
    newPrice,
    currency,
    amenities,
    total,
    rating,
    reviews,
  } = details;
  const navigate = useNavigate();
  return (
    <div
      className="rounded-lg relative border border-neutrals6 bg-neutrals8 cursor-pointer"
      onClick={() => navigate(`/rent/${name}`)}
    >
      <img
        src={image}
        alt="image"
        className="min-h-60 rounded-t-lg min-w-full"
      />
      <h5 className="absolute top-4 start-4 p-2 bg-neutrals8 rounded-sm text-xs text-neutrals2 font-bold uppercase">
        {host}
      </h5>
      <div className="p-6 pb-4 flex justify-between ">
        <div>
          <h5 className="font-medium leading-6 text-neutrals1 mb-2">{name}</h5>
          <div className="space-x-3">
            {amenities.splice(0, 2).map((amenity) => (
              <span key={amenity} className="text-xs leading-5 text-neutrals4">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <div className="prices p-2 border-2 border-main space-y-1.5 text-xs leading-3 font-bold h-fit rounded-sm">
          <span className="text-neutrals5 block relative">
            {oldPrice}
            {currency}
            <span className="absolute top-1/2 start-1/2 -translate-1/2 h-0.25 w-full bg-neutrals5"></span>
          </span>
          <span className="text-main block relative">
            {newPrice}
            {currency}
          </span>
        </div>
      </div>
      <hr className="text-neutrals6" />
      <div className="flex justify-between items-center text-xs leading-5 p-6 pb-4">
        <span className="font-semibold text-neutrals2">
          {total} {currency} total
        </span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <span className="font-semibold text-neutrals2">{rating}</span>
          </div>
          <span className="text-neutrals4">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
