import LandingImage from "../../../../assets/landing.png";
import FilterSection from "../molecules/FilterSection";
import EllipseShape from "../atoms/EllipseShape";

const Landing = () => {
  const ellipses = ["left-o", "left-[35%]", "right-0 translate-x-[50%]"];

  return (
    <main className="relative overflow-hidden bg-backgroundSecond flex justify-between items-center pt-[3.75rem] pb-[3.5rem] text-center xl:text-start">
      {ellipses.map((ellipse) => (
        <EllipseShape key={ellipse} position={ellipse} />
      ))}
      <div className="landing-text relative z-20 w-[95%] lg:w-[80%] mx-auto xl:mx-0 xl:max-w-[51rem] xl:ps-[3.25rem]">
        <h1 className="text-[14vw] sm:text-[5.5rem] text-main font-black leading-[120%] tracking-[2%] uppercase mb-6">
          The house
          <br /> of your
          <br /> <span className="text-[rgba(0,0,0,0.53)]">dreams</span>
        </h1>
        <p className="xl:max-w-[38rem] text-maingray sm:text-xl leading-6 tracking-[0.25%] mb-[4.125rem]">
          Explore our range of beautiful properties that allows you to reduce
          your energy consumption as well as your carbon footprint.
        </p>
        <FilterSection />
      </div>
      <img
        className="max-w-[37rem] hidden xl:block relative end-[5.25rem]"
        src={LandingImage}
        alt="Landing Image"
      />
    </main>
  );
};

export default Landing;
