import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/logo.svg";

const LogoPic = () => {
  return (
    <Link to="/" className="w-28 xl:w-28 flex justify-center items-center">
      <img className="w-23.5 lg:w-28" src={LogoIcon} alt="Logo" />
    </Link>
  );
};

export default LogoPic;
