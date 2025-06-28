import GoHomeMobile from "../atoms/GoHomeMobile";
import {
  faArrowUpFromBracket,
  faEllipsis,
  faFlag,
  faHeart,
  faHouse,
  faLocationArrow,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import IconsCirrcle from "../atoms/IconsCirrcle";
import type { RentDetailsType } from "../../../Home/types/homeTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleImage from "../../../../shared/components/atoms/CircleImage";
import IconAndNameSm from "../atoms/IconAndNameSm";

const RentPropertyHeading = ({
  details,
  imageOfHost,
}: {
  details: RentDetailsType;
  imageOfHost: string;
}) => {
  const { name, rating, reviews } = details;
  return (
    <div className="flex justify-between gap-8 flex-col md:flex-row pt-4">
      <div>
        <div className="flex gap-3">
          <GoHomeMobile />
          <h4 className="text-[2rem] lg:text-5xl max-w-160 leading-10 lg:leading-14 font-bold mb-3 md:mb-4">
            {name}
          </h4>
        </div>
        <div className="flex ps-8 md:ps-0 items-center gap-5 text-sm leading-6 text-neutrals4">
          <CircleImage image={imageOfHost} width="6" />
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-500" />
            <span className="text-neutrals2 font-medium">{rating}</span>
            <span className="hidden md:block">({reviews} reviews)</span>
          </div>
          {iconsAndTitle.map(({ icon, title }, index) => (
            <IconAndNameSm
              key={title}
              icon={icon}
              title={title}
              className={index === 1 ? "hidden md:flex" : ""}
            />
          ))}
        </div>
      </div>
      <hr className="md:hidden text-neutrals6" />
      <div className="icons flex gap-4 ps-8 md:ps-0">
        {iconsArray.map((icon, index) => (
          <IconsCirrcle key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default RentPropertyHeading;

const iconsArray = [
  faLocationArrow,
  faArrowUpFromBracket,
  faHeart,
  faEllipsis,
  faXmark,
];

const iconsAndTitle = [
  {
    icon: faHouse,
    title: "Superhost",
  },
  {
    icon: faFlag,
    title: "Queenstown,Otago,New Zealand",
  },
];
