import type { RentDetailsType } from "../../../Home/types/homeTypes";
import CircleImage from "../../../../shared/components/atoms/CircleImage";
import ButtonWithIcon1 from "../../../../shared/components/atoms/ButtonWithIcon1";
import ReservePrice from "../atoms/ReservePrice";
import { useRef } from "react";
import useClickOutside from "../../../../shared/hooks/useClickOutside";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const ReserveBox = ({
  details,
  imageOfHost,
  showing,
  setShowing,
}: {
  details: RentDetailsType;
  imageOfHost: string;
  showing: boolean;
  setShowing: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { oldPrice, newPrice, rating, reviews } = details;
  const ReserveBoxRef = useRef<HTMLDivElement>(null);

  useClickOutside(ReserveBoxRef, () => setShowing(false));

  return (
    <div
      ref={ReserveBoxRef}
      className={`showing-up fixed bottom-0 start-0 w-full max-h-[95vh] lg:relative lg:w-112 rounded-t-3xl lg:rounded-3xl p-8 space-y-8 border border-neutrals6
     bg-neutrals8 shadow-depth4 ${showing ? "block z-40" : "hidden lg:block"}`}
    >
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="flex gap-3 font-bold text-[2rem] leading-10 -tracking-[1%]">
            <span className="text-neutrals5 block relative">
              {oldPrice}
              <span className="absolute top-1/2 start-1/2 -translate-1/2 h-0.5 w-full bg-neutrals5"></span>
            </span>
            <span className="text-neutrals2 block">
              {newPrice}
              <span className="ms-2.25 text-neutrals4 text-base leading-6 font-normal">
                /night
              </span>
            </span>
          </div>
          <div className="flex gap-2 text-sm leading-6 items-center">
            <SvgIcon
              iconName="star"
              svgProp={{ width: "1.25rem", height: "1.25rem" }}
            />
            <span className="text-neutrals2 font-medium">{rating}</span>
            <span className="text-neutrals4">({reviews} reviews)</span>
          </div>
        </div>
        <CircleImage image={imageOfHost} width=" w-16" />
      </div>
      <div className="h-46 p-2 bg-neutrals7 rounded-[1.25rem] w-full"></div>
      <div className="flex gap-2">
        <ButtonWithIcon1 buttonName="Save" icon="PlussLine" />
        <ButtonWithIcon1
          buttonName="Rent"
          icon="ShoppingBagLine"
          classNameButton="bg-main flex-1 text-neutrals8 justify-center"
          classNameIcon="text-neutrals8"
        />
      </div>
      <div className="space-y-1">
        <ReservePrice name={`${oldPrice} x 7 nights`} price={+oldPrice * 7} />
        <ReservePrice
          name="campaign discount"
          price={(+newPrice - +oldPrice) * 7}
        />
        <ReservePrice name="service fee" price={103} />
        <ReservePrice
          name="Total"
          price={+newPrice * 7 + 103}
          classNameBox="bg-neutrals7 rounded-lg"
          classNameSpan="text-neutrals2 font-medium"
        />
      </div>
      <button className="text-neutrals4 text-xs leading-5 mx-auto flex gap-2 items-center">
        <SvgIcon iconName="FlagLine" svgProp={{ width: "0.75rem" }} />
        <span>Report this property</span>
      </button>
    </div>
  );
};

export default ReserveBox;
