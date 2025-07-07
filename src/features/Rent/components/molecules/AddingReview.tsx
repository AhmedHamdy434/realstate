import { useState } from "react";
import Rating from "../atoms/Rating";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";

const AddingReview = () => {
  const [rate, setRate] = useState(5);
  return (
    <div className="leading-6 md:leading-8">
      <h6 className="mb-2 md:text-2xl font-medium md:font-semibold">
        Add a review
      </h6>
      <span className="block text-sm text-neutrals4 mb-1">
        Be the first to review
      </span>
      <Rating rate={rate} setRate={setRate} />
      <div className="mt-8 md:mt-10 relative">
        <input
          placeholder="Share your thoughts"
          type="text"
          className="border-2 border-neutrals6 rounded-2xl p-4 ps-6 leading-10 w-full placeholder:text-neutrals4"
        />
        <div className="absolute top-1/2 end-4 -translate-y-1/2 flex gap-4 items-center">
          <ButtonWithIcon2
            buttonName="Post it!"
            icon="RightLine"
            classNameButton="bg-main text-neutrals8"
          />
        </div>
      </div>
    </div>
  );
};

export default AddingReview;
