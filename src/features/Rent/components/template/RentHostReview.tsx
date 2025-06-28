import type { RentDetailsType } from "../../../Home/types/homeTypes";

import AddingAndShowReview from "../organism/AddingAndShowReview";
import HostData from "../molecules/HostData";

const RentHostReview = ({
  details,
  imageOfHost,
}: {
  details: RentDetailsType;
  imageOfHost: string;
}) => {
  return (
    <div className="pt-16 lg:pt-20 xl:pt-34 flex items-start gap-12 bg-neutrals8 text-neutrals2 flex-col-reverse lg:flex-row">
      <HostData details={details} imageOfHost={imageOfHost} />

      <AddingAndShowReview />
    </div>
  );
};

export default RentHostReview;
