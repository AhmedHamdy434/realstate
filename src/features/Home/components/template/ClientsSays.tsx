import Client1 from "../../../../assets/client1.png";
import Client2 from "../../../../assets/client2.png";
import Client3 from "../../../../assets/client3.png";
import ClientCard from "../../../../shared/components/molecules/ClientCard";
import HorizontalScroll from "../../../../shared/components/organism/HorizontalScroll";

const ClientsSays = () => {
  return (
    <HorizontalScroll
      heading={
        <h5 className="text-main text-2xl lg:text-4xl font-bold sm:ps-7">
          What clients says
        </h5>
      }
      cardData={clientsData.map((data, index) => (
        <ClientCard key={`${data.name}${index}`} data={data} />
      ))}
    />
  );
};

export default ClientsSays;

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
