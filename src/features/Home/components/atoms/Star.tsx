import StarColored from "../../../../assets/Star 7.svg";
import StarUnColored from "../../../../assets/Star 8.svg";

const StarIcon = ({
  colored,
  position,
}: {
  colored: boolean;
  position: string;
}) => {
  return (
    <img
      src={colored ? StarColored : StarUnColored}
      alt="star"
      loading="lazy"
      className={`hidden lg:block absolute ${position}`}
    />
  );
};

export default StarIcon;
