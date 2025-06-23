import PropertyImage1 from "../../../../assets/test/property01.png";
import PropertyImage2 from "../../../../assets/test/property02.png";
import PropertyImage3 from "../../../../assets/test/property03.png";

import MostSectionComponent from "./MostSectionComponent";

const BestProperties = () => {
  return (
    <MostSectionComponent
      heading="Best Properties"
      paragraph={[
        "Discover our exclusive selection of the finest one-of-a-kind",
        "luxury properties architectural masterpieces.",
      ]}
      buyData={propsDetails}
    />
  );
};

export default BestProperties;
const propsDetails = [
  {
    image: PropertyImage1,
    city: "Giza , Cairo",
    country: "Egypt",
    price: "1,000,000",
    currency: "EGP",
    area: "360",
    type: "Living Area",
  },
  {
    image: PropertyImage2,
    city: "Giza , Cairo",
    country: "Egypt",
    price: "1,000,000",
    currency: "EGP",
    area: "360",
    type: "Living Area",
  },
  {
    image: PropertyImage3,
    city: "Giza , Cairo",
    country: "Egypt",
    price: "1,000,000",
    currency: "EGP",
    area: "360",
    type: "Living Area",
  },
];
