import LandingImage from "../../../../assets/landing.png";
import FilterSection from "../molecules/FilterSection";
import EllipseShape from "../atoms/EllipseShape";

const Landing = () => {
  const ellipses = ["left-o", "left-[35%]", "right-0 translate-x-[50%]"];

  return (
    <main className=" relative overflow-hidden bg-backgroundSecond ">
      <div className="contain max-w-360 mx-auto flex flex-col-reverse lg:flex-row justify-between px-8 lg:px-15 pt-4.5 pb-8 lg:py-11">
        {ellipses.map((ellipse) => (
          <EllipseShape key={ellipse} position={ellipse} />
        ))}
        <div className="landing-text flex-1 relative z-20 lg:w-130 xl:w-full xl:max-w-204 pt-8 lg:pt-0">
          <h1 className="text-[2rem] xs:text-[3rem] lg:text-[5.5rem] text-main font-black lg:leading-[120%] tracking-[2%] uppercase mb-4 lg:mb-6">
            The house
            <br className="sm:hidden lg:block" /> of your
            <br className="sm:hidden lg:block" />
            <span className="text-[rgba(0,0,0,0.53)]"> dreams</span>
          </h1>
          <p className="xl:w-152 text-sm text-maingray sm:text-xl leading-6 tracking-[0.25%] mb-8.5 lg:mb-12">
            Explore our range of beautiful properties that allows you to reduce
            your energy consumption as well as your carbon footprint.
          </p>
          <FilterSection />
        </div>
        <img
          className="w-full max-w-120 mx-auto lg:mx-0 aspect-[.9] sm:aspect-[1.2] lg:aspect-auto md:max-w-138 relative lg:end-16"
          src={LandingImage}
          alt="Landing Image"
        />
      </div>
    </main>
  );
};

export default Landing;
