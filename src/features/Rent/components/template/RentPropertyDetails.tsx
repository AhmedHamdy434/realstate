import { faFlag, faHouse } from "@fortawesome/free-solid-svg-icons";
import CircleImage from "../../../../shared/components/atoms/CircleImage";
import type { RentDetailsType } from "../../../Home/types/homeTypes";
import IconAndNameSm from "../atoms/IconAndNameSm";
import IconAndNameLg from "../atoms/IconAndNameLg";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import ReserveBox from "../organism/ReserveBox";
import { useState } from "react";

const RentPropertyDetails = ({
  details,
  imageOfHost,
}: {
  details: RentDetailsType;
  imageOfHost: string;
}) => {
  const { host, amenities } = details;
  const [ReserveBoxShow, setReserveBoxShow] = useState(false);

  return (
    <div className="flex justify-between gap-12 py-16 text-neutrals2">
      <div className="flex-1">
        <h4 className="text-[2rem] leading-10 lg:leading-14 font-bold mb-2">
          Private room in house
        </h4>
        <div className="flex items-center gap-1 leading-6">
          <span className="text-sm text-neutrals4">Hosted by</span>
          <div className="flex items-center gap-3">
            <CircleImage image={imageOfHost} width="6" />
            <span className="font-medium">{host}</span>
          </div>
        </div>
        <hr className="my-6 text-neutrals6" />
        <div className="flex items-center gap-4 mb-10">
          {iconsAndTitle.map(({ icon, title }, index) => (
            <IconAndNameSm
              key={title}
              icon={icon}
              title={title}
              className={index > 1 ? "hidden md:flex" : ""}
            />
          ))}
        </div>
        <p className="text-neutrals4 leading-6 mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, optio
          harum nisi tenetur vitae tempore iusto veritatis voluptatibus quos,
          porro molestiae vero voluptatem possimus ut ex accusantium? Beatae,
          molestias consectetur! <br /> <br /> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequuntur accusamus voluptas animi
          fugit reiciendis perferendis ipsam at quasi corrupti et officia sed,
          doloremque rerum, quae quaerat distinctio. Nam, qui distinctio.
        </p>
        <h6 className="text-2xl leading-8 font-semibold mb-8">Amenities</h6>
        <div className="flex flex-col gap-4 md:flex-row md:gap-20 relative w-fit">
          <div className="seperator absolute hidden md:block top-0 start-1/2 -translate-x-1/2 h-full w-0.25 bg-neutrals6"></div>
          <div className="space-y-6 lg:min-w-54">
            {amenities
              .slice(0, Math.ceil(amenities.length / 2))
              .map((amenity, i) => (
                <IconAndNameLg
                  key={`${amenity}${i}`}
                  icon={faHouse}
                  title={amenity}
                />
              ))}
          </div>
          <hr className="text-neutrals6 md:hidden" />
          <div className="space-y-6 lg:min-w-54">
            {amenities
              .slice(Math.ceil(amenities.length / 2))
              .map((amenity, i) => (
                <IconAndNameLg
                  key={`${amenity}${i}`}
                  icon={faHouse}
                  title={amenity}
                />
              ))}
          </div>
        </div>
        <ButtonWithIcon2
          buttonName="More detail"
          classNameButton="block lg:hidden mt-12 mb-16"
          handleClick={() => setReserveBoxShow(true)}
        />
      </div>
      <ReserveBox
        details={details}
        imageOfHost={imageOfHost}
        showing={ReserveBoxShow}
        setShowing={setReserveBoxShow}
      />
    </div>
  );
};

export default RentPropertyDetails;

const iconsAndTitle = [
  {
    icon: faHouse,
    title: "2 guests",
  },
  {
    icon: faFlag,
    title: "1 bedroom",
  },
  {
    icon: faFlag,
    title: "1 private bath",
  },
];
