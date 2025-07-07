import { useNavigate } from "react-router-dom";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const GoHomeMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center md:hidden items-center w-10 h-10">
      <SvgIcon
        iconName="ArrowLeftSimpleLine"
        svgProp={{ width: "0.625rem" }}
        handleClick={() => navigate("/")}
      />
    </div>
  );
};

export default GoHomeMobile;
