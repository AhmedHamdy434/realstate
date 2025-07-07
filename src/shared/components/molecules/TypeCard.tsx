import Pic from "../../../assets/test/property03.png";
import SvgIcon from "../atoms/SvgIcon";
const TypeCard = () => {
  return (
    <div className="flex flex-col gap-5 me-6 relative">
      <div className="absolute top-4 start-4 rounded-4xl px-3 py-2 bg-neutrals2 text-neutrals8 text-xs font-bold uppercase">
        20% off
      </div>
      <img src={Pic} alt="type image" className="rounded-3xl min-w-64 h-64" />
      <h6 className="text-neutrals2 leading-6 font-medium">Nature House</h6>
      <div className="space-x-1.5 text-neutrals4 text-xs font-semibold">
        <SvgIcon iconName="HomeLine" svgProp={{ width: "1rem" }} />

        <span>650,596</span>
      </div>
    </div>
  );
};

export default TypeCard;
