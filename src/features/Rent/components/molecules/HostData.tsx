import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faEarth,
  faEllipsis,
  faFlag,
  faHouse,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import IconsCirrcle from "../atoms/IconsCirrcle";
import type { RentDetailsType } from "../../../Home/types/homeTypes";
import CircleImage from "../../../../shared/components/atoms/CircleImage";
import IconAndNameSm from "../atoms/IconAndNameSm";
import { Link } from "react-router-dom";

const HostData = ({
  details,
  imageOfHost,
}: {
  details: RentDetailsType;
  imageOfHost: string;
}) => {
  const { host, rating, reviews } = details;
  return (
    <div className="lg:w-86 flex flex-col gap-8 items-center border border-neutrals6 bg-neutrals8 p-8 rounded-3xl shadow-depth4">
      <div className="flex gap-5.5 items-center w-full">
        <CircleImage image={imageOfHost} width="16" />
        <div className="space-y-2">
          <h4 className="text-[2rem] font-bold leading-10 ">{host}</h4>
          <div className="flex gap-2 text-sm leading-6 items-center">
            <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-500" />
            <span className="text-neutrals2 font-medium">{rating}</span>
            <span className="text-neutrals4">({reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 bg-neutrals7 rounded-[1.25rem]">
        <IconAndNameSm icon={faHouse} title="Superhost" />
        <IconAndNameSm icon={faStar} title={`${reviews} reviews`} />
      </div>
      <p className="text-sm leading-6 text-neutrals4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
        repellendus dolorum impedit nam est vero incidunt laborum tempore
        recusandae ea voluptatem obcaecati eaque, laudantium nihil maxime,
        cumque commodi, voluptatibus temporibus.
      </p>
      <Link to="/" className="space-x-2">
        <FontAwesomeIcon icon={faEarth} className="w-4 text-neutrals4" />
        <span className="text-sm leading-4 font-bold">https://ui8.net</span>
      </Link>
      <div className="flex items-center gap-2">
        <ButtonWithIcon2
          buttonName="Contact"
          classNameButton="border-0 bg-neutrals2 text-neutrals8"
        />
        {[faArrowUpFromBracket, faEllipsis].map((icon, index) => (
          <IconsCirrcle key={index} icon={icon} />
        ))}
      </div>
      <div className="space-x-6">
        {[faXTwitter, faInstagram, faFacebookF].map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="w-5 text-neutrals4"
          />
        ))}
      </div>
      <hr className="text-neutrals6 w-50" />
      <span className="text-xs text-neutrals4 leading-5">
        Member since Mar 15, 2017
      </span>
      <button className="text-neutrals4 text-xs leading-5 mx-auto space-x-2 block">
        <FontAwesomeIcon icon={faFlag} className="w-3" />
        <span>Report this property</span>
      </button>
    </div>
  );
};

export default HostData;
