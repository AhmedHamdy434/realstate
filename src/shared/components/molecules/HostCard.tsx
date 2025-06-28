import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { HostDataType } from "../../../features/Home/types/homeTypes";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HostCard = ({ data }: { data: HostDataType }) => {
  const { image, name, miniHead, background, rating } = data;

  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="min-w-64 rounded-3xl border border-neutrals6 bg-neutrals8 me-6 pb-8"
    >
      <div className="relative h-55">
        <img
          src={background}
          alt={name}
          className="min-w-full h-full rounded-t-3xl"
        />
        <span className="absolute top-4 start-4 rounded-3xl px-2 py-0.5 bg-neutrals8 text-neutrals2 text-xs leading-5 font-semibold">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 me-1" />
          {rating}
        </span>
        <img
          src={image}
          alt={name}
          className="absolute top-full start-1/2 -translate-1/2 w-20 h-20 rounded-full border-4 border-neutrals8"
        />
      </div>
      <h5 className="mt-14 mb-1 leading-6 font-medium text-neutrals2 text-center">
        {name}
      </h5>
      <h6 className="text-xs text-neutrals4 leading-5 text-center">
        {miniHead}
      </h6>
    </div>
  );
};

export default HostCard;
