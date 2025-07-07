import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import IconsCirrcle from "../atoms/IconsCirrcle";
import type { RentDetailsType } from "../../../Home/types/homeTypes";
import CircleImage from "../../../../shared/components/atoms/CircleImage";
import IconAndNameSm from "../atoms/IconAndNameSm";
import { Link } from "react-router-dom";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

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
            <SvgIcon
              iconName="star"
              svgProp={{ width: "1.25rem", height: "1.25rem" }}
            />
            <span className="text-neutrals2 font-medium">{rating}</span>
            <span className="text-neutrals4">({reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 bg-neutrals7 rounded-[1.25rem]">
        <IconAndNameSm icon="HomeLine" title="Superhost" />
        <IconAndNameSm icon="StarShape" title={`${reviews} reviews`} />
      </div>
      <p className="text-sm leading-6 text-neutrals4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
        repellendus dolorum impedit nam est vero incidunt laborum tempore
        recusandae ea voluptatem obcaecati eaque, laudantium nihil maxime,
        cumque commodi, voluptatibus temporibus.
      </p>
      <Link to="/" className="flex gap-2 items-center">
        <SvgIcon iconName="GlobeLine" svgProp={{ width: "1rem" }} />
        <span className="text-sm leading-4 font-bold">https://ui8.net</span>
      </Link>
      <div className="flex items-center gap-2">
        <ButtonWithIcon2
          buttonName="Contact"
          classNameButton="border-0 bg-neutrals2 text-neutrals8"
        />
        {["ShareSquareLine", "MoreLine"].map((icon, index) => (
          <IconsCirrcle key={index} icon={icon} />
        ))}
      </div>
      <div className="flex gap-6">
        {["TwitterLine", "InstgramLine", "FacebookLine"].map((icon) => (
          <SvgIcon key={icon} iconName={icon} />
        ))}
      </div>
      <hr className="text-neutrals6 w-50" />
      <span className="text-xs text-neutrals4 leading-5">
        Member since Mar 15, 2017
      </span>
      <button className="text-neutrals4 text-xs leading-5 mx-auto flex gap-2 items-center">
        <SvgIcon iconName="FlagLine" svgProp={{ width: "0.75rem" }} />
        <span>Report this property</span>
      </button>
    </div>
  );
};

export default HostData;
