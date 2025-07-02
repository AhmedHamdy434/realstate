import { useState } from "react";

import InputSearch from "../molecules/InputSearch";

const FilterSection = () => {
  const typesofSearch = ["Buy", "Rent"];
  type SearchType = (typeof typesofSearch)[number];
  const [type, setType] = useState<SearchType>("Buy");

  return (
    <>
      <div className="rec-type mx-auto lg:mx-0 w-fit xl:ps-3 rounded-4xl flex gap-1 p-2 bg-rgba(255,255,255,0.65) border border-[rgba(217,217,217,1)] backdrop-blur-2xl">
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
      <div
        className="w-full lg:w-[80vw] max-w-280 mx-auto sm:mx-0 flex flex-col sm:flex-row justify-between items-center md:gap-0 lg:gap-7.5 
        rounded-3xl p-4 sm:p-8 -m-1 bg-white shadow-[35px_35px_65px_0px_rgba(146,106,120,0.16)]"
      >
        <InputSearch />
      </div>
    </>
  );
};

export default FilterSection;
