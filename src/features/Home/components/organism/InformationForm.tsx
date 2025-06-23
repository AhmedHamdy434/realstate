import InfoImage from "../../../../assets/infoform.png";
import FormInfo from "../molecules/FormInfo";
const InformationForm = () => {
  return (
    <div className="bg-[rgba(245,245,245,1)] py-25">
      <img
        src={InfoImage}
        alt="home"
        className="max-w-146 hidden xl:block absolute mt-10.5"
      />
      <div className="container">
        <div className="form max-w-159 xl:ms-auto">
          <h3 className="text-2xl sm:text-5xl leading-14 font-semibold mb-3.5 text-main">
            Find the right one for you!
          </h3>
          <p className="text-[rgba(189,189,189,1)] sm:text-lg">
            Schedule a consultation with an agent.
          </p>
          <FormInfo />
        </div>
      </div>
    </div>
  );
};

export default InformationForm;
