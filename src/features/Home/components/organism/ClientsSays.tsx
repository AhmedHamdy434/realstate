import LeftArrow from "../../../../assets/Arrows Left.svg";
import RightArrow from "../../../../assets/ArrowsRight.svg";
import Client1 from "../../../../assets/client1.png";
import Client2 from "../../../../assets/client2.png";
import Client3 from "../../../../assets/client3.png";
import { useRef } from "react";
import ClientCard from "../molecules/ClientCard";
import StarIcon from "../atoms/Star";

const ClientsSays = () => {
  // data
  const clientsData = [
    {
      image: Client1,
      name: "Sarah Connor",
      miniHead: "Bought the Tranquil Haven project",
      paragraph:
        "We are thrilled with our new home! The Tranquil Haven project exceeded all our expectations. The spacious rooms, cozy atmosphere, and high-quality materials have made our country house the perfect retreat. Thank you for your professionalism and attention to detail!",
    },
    {
      image: Client2,
      name: "Oleg Tinkoff",
      miniHead: "Bought the Lakeside Serenity project",
      paragraph:
        "Lakeside Serenity is a magnificent project! The house is situated by the lake, and the views are simply stunning. The spacious rooms and modern amenities make living in this house comfortable and enjoyable. A huge thank you for such a wonderful project and impeccable work!",
    },
    {
      image: Client3,
      name: "Barbara Streisand",
      miniHead: "Bought the Sunny Retreat project",
      paragraph:
        "The Sunny Retreat project is our dream home! Bright and spacious rooms, a smart layout, and top-notch construction quality. The team worked at the highest level, adhering to all deadlines and considering our wishes. We are very satisfied with the result!",
    },
  ];
  // for scrolling
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + 0.4 * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-18.5 lg:py-29 mb-25">
      <StarIcon colored position="top-13.5 start-10" />
      <StarIcon colored={false} position="bottom-3 end-6" />
      <div className="container">
        <div className="heading flex justify-between mb-10 lg:mb-19">
          <h5 className="text-main text-2xl lg:text-4xl font-bold sm:ps-7">
            What clients says
          </h5>
          <div className="flex gap-2.5">
            <img
              className="cursor-pointer w-12 sm:w-20"
              src={LeftArrow}
              alt="LeftArrow"
              onClick={() => scroll("left")}
            />
            <img
              className="cursor-pointer w-12 sm:w-20"
              src={RightArrow}
              alt="RightArrow"
              onClick={() => scroll("right")}
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
          {clientsData.map((data) => (
            <ClientCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSays;
