import BackgroundImage from "../../../../assets/user/image.png";

const LandingRentSearch = () => {
  return (
    <div className="mx-4 md:mx-10 xl:mx-20 relative md:mb-25">
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
        className="text-neutrals1 tracking-[-2%] bg-no-repeat bg-cover rounded-3xl bg-center min-h-175 md:min-h-147 flex flex-col gap-4 items-center
          text-center"
      >
        <h2 className="mt-15 text-[4rem] font-bold md:mt-32 md:text-8xl">
          South Island
        </h2>
        <h5 className="font-medium leading-6 md:text-2xl md:leading-8 md:font-normal">
          New Zealand
        </h5>
      </div>
      <div
        className="absolute left-0 bottom-0 md:translate-y-1/2 mx-4 text-neutrals1 md:mx-10 xl:mx-20 rounded-[1.25rem] md:rounded-lg border border-neutrals8
       bg-neutrals8 p-5 md:p-6 shadow-glass1 backdrop-blur-glass01"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione,
        minus vel, in sed eaque atque hic dolore incidunt perspiciatis
        voluptatem officia aliquam. Qui sunt officia delectus soluta! Deleniti,
        mollitia?
      </div>
    </div>
  );
};

export default LandingRentSearch;
