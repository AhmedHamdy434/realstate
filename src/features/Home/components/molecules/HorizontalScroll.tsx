import { useRef, useState } from "react";
import type { HorizontalScrollDataType } from "../../types/homeTypes";
import StarIcon from "../atoms/Star";
import ClientCard from "./ClientCard";
import HostCard from "./HostCard";
import ScrollArrow from "../atoms/ScrollArrow";

const HorizontalScroll = ({
  heading,
  hostData,
  clientData,
}: HorizontalScrollDataType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      const newLeft = scrollLeft + 0.4 * scrollAmount;
      scrollRef.current.scrollTo({
        left: newLeft,
        behavior: "smooth",
      });
      setIsAtStart(newLeft <= 0);
      setIsAtEnd(newLeft + clientWidth >= scrollWidth - 1);
    }
  };

  return (
    <div className="relative pt-18.5 lg:py-29 mb-25">
      <StarIcon colored position="top-13.5 start-10" />
      <StarIcon colored={false} position="bottom-3 end-6" />
      <div className="container">
        <div className="heading flex justify-between mb-10 lg:mb-19">
          {heading}
          <div className="flex gap-2.5 items-center">
            <ScrollArrow
              handleClick={() => scroll("left")}
              direction="left"
              disabled={isAtStart}
            />
            <ScrollArrow
              handleClick={() => scroll("right")}
              direction="right"
              disabled={isAtEnd}
            />
          </div>
        </div>
        <div
          ref={scrollRef}
          className="cards flex gap-2 overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {clientData?.map((data, index) => (
            <ClientCard key={`${data.name}${index}`} data={data} />
          ))}
          {hostData?.map((data, index) => (
            <HostCard key={`${data.name}${index}`} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
