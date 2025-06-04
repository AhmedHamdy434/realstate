import type { ImageSideType } from "../../types/authTypes";

const ImageSide = ({ imageSide }: { imageSide: ImageSideType }) => {
  const { heading1, heading2, images } = imageSide;
  return (
    <div className="relative -left-4 w-[54%] hidden bg-backgroundGrey py-37 flex-col gap-10 items-center rounded-[1.875rem] lg:flex">
      <h3 className="text-main text-[2rem] font-semibold text-center">
        {heading1}
        {heading2 && (
          <>
            <br />
            {heading2}
          </>
        )}
      </h3>
      <div className="images w-[79%] flex">
        <img
          src={images[0]}
          alt="imageOne"
          className="w-1/2 shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.15)]"
        />
        <div className="w-1/2">
          <img
            src={images[1]}
            alt="imageTwo"
            className="shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.15)]"
          />
          <img
            src={images[2]}
            alt="imageThree"
            className="shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.15)]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSide;
