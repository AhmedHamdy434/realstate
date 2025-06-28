import { faStar, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({
  rate,
  setRate,
}: {
  rate: number;
  setRate?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const stars: IconDefinition[] = Array(5).fill(faStar);
  return (
    <>
      {stars.map((star, i) => (
        <FontAwesomeIcon
          key={i}
          icon={star}
          className={`${setRate ? "w-6 me-1 cursor-pointer" : "w-4 me-0.5"} ${
            rate > i ? "text-yellow-500" : "text-neutrals6"
          }`}
          onClick={setRate ? () => setRate(i + 1) : undefined}
        />
      ))}
    </>
  );
};

export default Rating;
