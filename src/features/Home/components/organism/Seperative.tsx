import SeperatorImage from "../../../../assets/seperator image.png";
import GrayRectangle from "../../../../assets/Rectangle 1554.png";
import Subtract from "../../../../assets/Subtract.png";

const Seperative = () => {
  return (
    <div className="bg-main relative">
      <div className="container flex justify-between items-center min-h-45">
        <img
          src={GrayRectangle}
          alt="Rec"
          loading="lazy"
          className="hidden lg:block max-w-135"
        />
        <img
          src={SeperatorImage}
          alt="seperator image"
          loading="lazy"
          className="absolute hidden lg:block max-w-135 bottom-0 ps-11.5"
        />
        <div className="max-w-88">
          <h3
            className="text-[1.75rem] font-black text-transparent bg-[linear-gradient(92.27deg,_#FFFFFF_1.9%,_rgba(255,255,255,0.7)_21.4%,_#FFFFFF_72.48%)]
           bg-clip-text leading-[120%] uppercase mb-5"
          >
            Start fulfilling your dreams with us
          </h3>
          <p className="font-light leading-[140%] text-white">
            Flexible approach to each client
          </p>
        </div>
        <img src={Subtract} alt="Subtract" className="w-25 hidden sm:block" />
      </div>
    </div>
  );
};

export default Seperative;
