import { useState } from "react";
import RecButton from "../../../../shared/components/atoms/RecButton";
import InputLanding from "../atoms/InputLanding";

const FilterSection = () => {
  const typesofSearch = ["Buy", "Rent", "Sell"];
  type SearchType = (typeof typesofSearch)[number];
  const [type, setType] = useState<SearchType>("Buy");

  const inputLandingData = [
    {
      head: "Location",
      placeholder: "Egypt",
    },
    {
      head: "Type",
      placeholder: "Home",
    },
    {
      head: "Price Range",
      placeholder: "700 K-900 K",
    },
  ];

  return (
    <>
      <div className="rec-type w-fit xl:ps-3 rounded-4xl flex gap-1 p-2 bg-rgba(255,255,255,0.65) border border-[rgba(217,217,217,1)] backdrop-blur-2xl">
        {typesofSearch.map((typeofSearch) => (
          <button
            key={typeofSearch}
            className={`px-5 py-2 rounded-4xl text-lg leading-6 ${
              typeofSearch === type
                ? "bg-main text-white"
                : "text-[rgba(38,42,45,1)]"
            }`}
            onClick={() => setType(typeofSearch)}
          >
            {typeofSearch}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 p-4 sm:p-8 relative bottom-1 bg-white shadow-[35px_35px_65px_0px_rgba(146,106,120,0.16)]">
        <div className="flex-1 flex justify-between items-center">
          {inputLandingData.map((data) => (
            <InputLanding key={data.head} data={data} />
          ))}
        </div>
        <RecButton
          buttonName="Search"
          className="shadow-[0px_0px_65px_0px_rgba(105,185,157,0.32)]"
          colored
        />
      </div>
    </>
  );
};

export default FilterSection;
