import type { AboutImageDataType } from "../../types/homeTypes";

const NumbersInAbout = ({ data }: { data: AboutImageDataType }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-main text-5xl font-semibold leading-14.5">
        {data.number}+
      </span>
      <span className="block max-w-20.5 leading-6.5 text-lighttext">
        {data.name}
      </span>
    </div>
  );
};

export default NumbersInAbout;
