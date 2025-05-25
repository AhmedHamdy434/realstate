import { Link } from "react-router-dom";
import type { AuthHeadingType } from "../../types/authTypes";

const FormHeading = ({ heading }: { heading: AuthHeadingType }) => {
  const { mainHead, secHead, spanHead } = heading;
  return (
    <div className="text-center align-middle">
      <h2 className="text-main text-5xl font-semibold mb-6">{mainHead}</h2>
      <h4 className="text-2xl">
        {secHead}
        <Link
          to={spanHead === "Log in" ? "/auth/login" : "/auth/register"}
          className="underline text-main"
        >
          {spanHead}
        </Link>
      </h4>
    </div>
  );
};

export default FormHeading;
