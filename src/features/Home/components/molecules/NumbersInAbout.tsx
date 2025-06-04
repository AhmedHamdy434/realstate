import type { AboutImageDataType } from "../../types/homeTypes";

const NumbersInAbout = ({ data }: { data: AboutImageDataType }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-main text-5xl font-semibold leading-[3.625rem]">
        {data.number}+
      </span>
      <span className="block max-w-[5.125rem] leading-[1.625rem] text-lighttext">
        {data.name}
      </span>
    </div>
  );
};

export default NumbersInAbout;
