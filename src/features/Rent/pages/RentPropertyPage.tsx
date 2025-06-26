import { useParams } from "react-router-dom";
import GoHomeButton from "../components/atoms/GoHomeButton";
import RentImage from "../../../assets/test/property01.png";
import RentPropertyHeading from "../components/organism/RentPropertyHeading";
import Header from "../../../shared/components/template/Header";
import RentPropertyImages from "../components/organism/RentPropertyImages";
import RentPropertyDetails from "../components/organism/RentPropertyDetails";
import HostImage from "../../../assets/client2.png";

const RentPropertyPage = () => {
  const { id } = useParams();
  if (!id) return;
  const RentPropertyData = {
    image: RentImage,
    host: "superhost",
    name: "Entire serviced classy mountain house",
    oldPrice: "356",
    newPrice: "267",
    currency: "EGY",
    amenities: [
      "Free wifi",
      "Breakfast included",
      "Free computer",
      "ATM",
      "Nearby city",
    ],
    total: "200",
    rating: "4.8",
    reviews: "12",
  };
  const imageOfHost = HostImage;

  const images = Array.from({ length: 3 }, () => RentImage);

  return (
    <>
      <Header currentPage="Property" />
      <div className="container pt-12 md:pt-4">
        <GoHomeButton />
        <RentPropertyHeading
          details={RentPropertyData}
          imageOfHost={imageOfHost}
        />
        <RentPropertyImages
          image={RentPropertyData.image}
          images={images}
          id={id}
        />
        <RentPropertyDetails
          details={RentPropertyData}
          imageOfHost={imageOfHost}
        />
      </div>
    </>
  );
};

export default RentPropertyPage;
