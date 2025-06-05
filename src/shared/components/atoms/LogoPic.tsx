import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/logo.svg";

const LogoPic = () => {
  return (
    <Link to="/" className="w-40 xl:w-52.5 flex justify-center items-center">
      <img src={LogoIcon} alt="Logo" />
    </Link>
  );
};

export default LogoPic;
