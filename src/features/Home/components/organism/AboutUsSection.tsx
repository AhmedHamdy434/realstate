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
      positon: "top-19 end-0",
    },
    {
      colored: false,
      positon: "top-12 end-83",
    },
    {
      colored: false,
      positon: "top-121 end-5",
    },
    {
      colored: false,
      positon: "top-10 start-10 block! lg:hidden!",
    },
    {
      colored: true,
      positon: "top-[98%] end-6.5 block! lg:hidden!",
    },
  ];

  return (
    <div className="lg:mt-6.5 mb-18.5 lg:mb-25 tracking-[0.25%]">
      <div className="container relative flex flex-col lg:flex-row justify-between items-center gap-48.5 lg:gap-14 pt-43 lg:pt-24">
        {starPosition.map(({ colored, positon }) => (
          <StarIcon key={positon} colored={colored} position={positon} />
        ))}
        <div className="image-side sm:block lg:w-1/2 relative">
          <div
            className="rate bg-white shadow-[35px_35px_65px_0px_rgba(146,106,120,0.16)] absolute -top-32 lg:-top-24 start-1/2 lg:start-[16%]
            -translate-x-1/2 lg:-translate-x-0 flex flex-col items-center p-5 lg:px-8 lg:py-0"
          >
            <img
              src={TickSquare}
              alt="TickSquare"
              className=" hidden lg:block shadow-[0px_0px_38px_0px_rgba(105,185,157,0.32)] m-[.17rem] mb-4"
            />
            <span className="text-maingray text-[2.5rem] lg:text-7xl leading-20">
              4.8
            </span>
            <div className="stars flex justify-center gap-1 -mt-3 lg:mt-2 mb-2.75 lg:mb-4">
              {[Star, Star, Star, Star, Star].map((star, index) => (
                <img
                  key={index}
                  className="w-3 lg-w-4.5"
                  src={star}
                  alt="star"
                />
              ))}
            </div>
            <span className="block mb-2 lg:mb-0.5 text-sm lg:text-base text-lighttext leading-6">
              Trusted on
            </span>
            <span className="text-sm lg:text-base leading-6 lg:mb-8">
              500&#43; Reviews
            </span>
          </div>
          <div
            className="absolute -bottom-35 end-1/2 translate-x-1/2 lg:translate-x-0 lg:end-0 lg:bottom-0 bg-white
          px-8 py-3 flex flex-col lg:flex-row gap-8 items-center"
          >
            {imageData.map((data) => (
              <NumbersInAbout key={data.name} data={data} />
            ))}
          </div>
          <img
            src={AbouUsImage}
            alt="AbouUsImage"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="text-side flex-1">
          <h6 className="bg-[rgba(248,249,254,1)] w-fit px-6 py-3 text-lg mx-auto lg:mx-0 leading-6.5 font-medium text-main mb-4">
            ABOUT US
          </h6>
          <h2 className="text-main text-2xl lg:text-5xl leading-7.5 lg:leading-14 font-semibold mb-4">
            How much is your property worth now?
          </h2>
          <p className="text-sm lg:text-base text-maingray opacity-[.88] leading-6.5 mb-4 lg:mb-12">
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
