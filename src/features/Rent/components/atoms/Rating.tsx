import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const Rating = ({
  rate,
  setRate,
}: {
  rate: number;
  setRate?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const stars = Array(5).fill(0);
  return (
    <>
      {stars.map((_, i) => (
        <SvgIcon
          key={i}
          iconName={rate > i ? "star" : "StarShape"}
          svgProp={{
            width: setRate ? "1.25rem" : "0.8rem",
            height: setRate ? "1.25rem" : "0.8rem",
            cursor: setRate ? "pointer" : "",
          }}
          wrapperStyle="inline-block w-fit me-1"
          handleClick={setRate ? () => setRate(i + 1) : undefined}
        />
      ))}
    </>
  );
};

export default Rating;
