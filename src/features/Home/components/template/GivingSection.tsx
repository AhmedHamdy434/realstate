import Heart from "../../../../assets/Heart.svg";
import Done from "../../../../assets/Shield Done.svg";
import Star from "../../../../assets/Star.svg";
import Ticket from "../../../../assets/Ticket Star.svg";
import Location from "../../../../assets/Location.svg";
import Graph from "../../../../assets/Graph.svg";

const GivingSection = () => {
  const GivingSecData = [
    {
      icon: Heart,
      heading: "Comfortable",
      paragraph:
        "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
    },
    {
      icon: Done,
      heading: "Extra security",
      paragraph:
        "You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.",
    },
    {
      icon: Star,
      heading: "Luxury",
      paragraph:
        "Find out how we provide the highest standard of professional property management to give you all the benefits of property.",
    },
    {
      icon: Ticket,
      heading: "Best price",
      paragraph:
        "Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.",
    },
    {
      icon: Location,
      heading: "Strategic location",
      paragraph:
        "Located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.",
    },
    {
      icon: Graph,
      heading: "Efficient",
      paragraph:
        "Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent",
    },
  ];
  return (
    <div className="bg-[rgba(248,248,248,1)] pt-9.5 lg:pt-14 pb-8 lg:pb-19.5">
      <div className="container tracking-[0.5px]">
        <h4 className="mb-7 lg:mb-12 text-main text-[2rem] lg:text-5xl font-semibold leading-14">
          Giving you peace
          <br />
          of mind
        </h4>
        <div className="boxes grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {GivingSecData.map(({ icon, heading, paragraph }) => (
            <div
              key={heading}
              className="box space-y-4 bg-[rgba(245,245,245,1)] p-5 "
            >
              <img src={icon} alt={heading} loading="lazy" />
              <h5 className="leading-9.5 text-maingray text-[1.75rem] font-bold">
                {heading}
              </h5>
              <p className="text-[rgba(115,120,140,1)] leading-[1.625rem]">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GivingSection;
