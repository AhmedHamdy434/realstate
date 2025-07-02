import type { DateRange } from "react-day-picker";
import type { TravelerType } from "../../Home/types/homeTypes";
import type { SetURLSearchParams } from "react-router-dom";

export type CommentDataType = {
  image: string;
  name: string;
  comment: string;
  star: number;
};
export type RentSearchDataType = {
  city: string;

  setCity: React.Dispatch<React.SetStateAction<string>>;
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  travelers: Record<TravelerType, number>;
  setTravelers: React.Dispatch<
    React.SetStateAction<Record<TravelerType, number>>
  >;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};
