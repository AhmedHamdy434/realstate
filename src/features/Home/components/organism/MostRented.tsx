import MostSectionComponent from "./MostSectionComponent";
import RentImage from "../../../../assets/test/property01.png";

const MostRented = () => {
  return (
    <MostSectionComponent
      heading="Most Rented"
      paragraph={[
        "Discover our exclusive selection of the finest one-of-a-kind",
        "luxury properties architectural masterpieces.",
      ]}
      rentData={rentData}
    />
  );
};

export default MostRented;

const rentData = [
  {
    image: RentImage,
    host: "superhost",
    name: "Entire serviced classy mountain house",
    oldPrice: "356",
    newPrice: "267",
    currency: "EGY",
    amenities: ["Free wifi", "Breakfast included"],
    total: "200",
    rating: "4.8",
    reviews: "12",
  },
  {
    image: RentImage,
    host: "superhost",
    name: "Entire serviced classy mountain house",
    oldPrice: "356",
    newPrice: "267",
    currency: "EGY",
    amenities: ["Free wifi", "Breakfast included"],
    total: "200",
    rating: "4.8",
    reviews: "12",
  },
  {
    image: RentImage,
    host: "superhost",
    name: "Entire serviced classy mountain house",
    oldPrice: "356",
    newPrice: "267",
    currency: "EGY",
    amenities: ["Free wifi", "Breakfast included"],
    total: "200",
    rating: "4.8",
    reviews: "12",
  },
];
