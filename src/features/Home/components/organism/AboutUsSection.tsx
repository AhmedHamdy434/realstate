import AbouUsImage from "../../../../assets/aboutus.png";
import Star from "../../../../assets/Layer 2.svg";
import TickSquare from "../../../../assets/Tick Square.svg";
import RecButton from "../../../../shared/components/atoms/RecButton";
import StarIcon from "../atoms/Star";
import NumbersInAbout from "../molecules/NumbersInAbout";

const AboutUsSection = () => {
  const imageData = [
    {
      number: "250",
      name: "Property Sale",
    },
    {
      number: "550",
      name: "Apartmen Rent",
    },
  ];

  const starPosition = [
    {
      colored: true,
      positon: "top-[4.75rem] end-0",
    },
    {
      colored: false,
      positon: "top-12 end-[20.75rem]",
    },
    {
      colored: false,
      positon: "top-[30.25rem] end-5",
    },
  ];

  return (
    <div className="mt-[1.625rem] mb-[6.25rem] tracking-[0.25%]">
      <div className="container relative flex flex-col lg:flex-row justify-between items-center gap-14 sm:pt-[6rem]">
        {starPosition.map(({ colored, positon }) => (
          <StarIcon key={positon} colored={colored} position={positon} />
        ))}
        <div className="image-side hidden sm:block lg:w-1/2 relative">
          <div className="rate bg-white shadow-[35px_35px_65px_0px_rgba(146,106,120,0.16)] absolute -top-[6rem] start-[16%] flex flex-col items-center px-8">
            <img
              src={TickSquare}
              alt="TickSquare"
              className="shadow-[0px_0px_38px_0px_rgba(105,185,157,0.32)] m-[.17rem] mb-4"
            />
            <span className="text-maingray text-7xl leading-[5rem] mb-2">
              4.8
            </span>
            <div className="stars flex justify-center gap-1 mb-4">
              {[Star, Star, Star, Star, Star].map((star) => (
                <img src={star} alt="star" />
              ))}
            </div>
            <span className="block mb-0.5 text-lighttext leading-6">
              Trusted on
            </span>
            <span className="leading-6 mb-8">500&#43; Reviews</span>
          </div>
          <div className="absolute end-0 bottom-0 bg-white px-8 py-3 flex gap-8 items-center">
            {imageData.map((data) => (
              <NumbersInAbout key={data.name} data={data} />
            ))}
          </div>
          <img
            src={AbouUsImage}
            alt="AbouUsImage"
            loading="lazy"
            className=""
          />
        </div>
        <div className="text-side flex-1">
          <h6 className="bg-[rgba(248,249,254,1)] w-fit px-6 py-3 text-lg leading-[1.625rem] font-medium text-main mb-4">
            ABOUT US
          </h6>
          <h2 className="text-main text-5xl leading-14 font-semibold mb-4">
            How much is your property worth now?
          </h2>
          <p className="text-maingray opacity-[.88] leading-[1.625rem] mb-12">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work for
            local people.
          </p>
          <RecButton
            buttonName="Learn More"
            colored
            className="shadow-[24px_24px_65px_0px_rgba(81,140,119,0.24)]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
