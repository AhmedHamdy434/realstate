import Host1 from "../../../../assets/client1.png";
import Host2 from "../../../../assets/client2.png";
import Host3 from "../../../../assets/client3.png";
import HorizontalScroll from "../../../../shared/components/organism/HorizontalScroll";
import BackgroundImage from "../../../../assets/test/property02.png";
import { useState } from "react";
import DropMenu from "../../../../shared/components/molecules/DropMenu";
import type { HostDataType } from "../../types/homeTypes";
import HostCard from "../../../../shared/components/molecules/HostCard";

const BestHost = () => {
  const durations = ["week", "month", "year"];
  type DurationType = (typeof durations)[number];
  const [duration, setDuration] = useState<DurationType>("month");

  const dataMap: Record<DurationType, HostDataType[]> = {
    week: hostsWeekData,
    month: hostsMonthData,
    year: hostsYearData,
  };

  return (
    <HorizontalScroll
      heading={
        <div className="flex flex-col sm:flex-row items-center text-2xl lg:text-5xl leading-9 lg:leading-14 text-neutrals2 font-bold">
          <h3 className="">Best hosts of the</h3>
          <DropMenu
            value={duration}
            setValue={setDuration}
            valuesList={durations}
            className1="px-4 py-2"
            className2="p-3 lg:p-6"
          />
        </div>
      }
      cardData={dataMap[duration].map((data, index) => (
        <HostCard key={`${data.name}${index}`} data={data} />
      ))}
    />
  );
};

export default BestHost;

const hostsWeekData = [
  {
    image: Host2,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host2,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host2,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host2,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host2,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
];
const hostsMonthData = [
  {
    image: Host1,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host1,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host1,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host1,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host1,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
];
const hostsYearData = [
  {
    image: Host3,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host3,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host3,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host3,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
  {
    image: Host3,
    name: "Antone Heller",
    miniHead: "Gaylordside",
    background: BackgroundImage,
    rating: "4.9",
  },
];
