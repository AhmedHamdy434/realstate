export type LandingDataType = {
  head: string;
  placeholder: string;
};
export type PropDetailsType = {
  image: string;
  city: string;
  country: string;
  price: string;
  currency: string;
  area: string;
  type: string;
};
export type RentDetailsType = {
  image: string;
  host: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  currency: string;
  amenities: string[];
  total: string;
  rating: string;
  reviews: string;
};
export type AboutImageDataType = {
  number: string;
  name: string;
};
export type ClientDataType = {
  image: string;
  name: string;
  miniHead: string;
  paragraph: string;
};
export type HostDataType = {
  background: string;
  image: string;
  name: string;
  miniHead: string;
  rating: string;
};

export type MostCardsComponentType = {
  heading: string;
  paragraph: string[];
  buyData?: PropDetailsType[];
  rentData?: RentDetailsType[];
};
export type HorizontalScrollDataType = {
  heading: React.JSX.Element;
  cardData: React.JSX.Element[];
};
