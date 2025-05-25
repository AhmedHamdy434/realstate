import { useNavigate } from "react-router-dom";
import MainButton from "../../../shared/components/atoms/MainButton";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";
import VerifiedMark from "../../../assets/auth/verified.png";

const EmailVerified = () => {
  const navigate = useNavigate();

  const verifiedHeading = {
    heading: "Email verified",
    paragraphs: [
      "Your password has been successfully reset.",
      "Click below to log in magically.",
    ],
  };

  return (
    <>
      <AuthHeader />
      <div className="w-full text-center max-w-3xl mx-auto py-[5.625rem]">
        <img
          src={VerifiedMark}
          alt="Verified"
          width={209}
          height={209}
          className="mx-auto mb-7"
        />
        <div className="mb-[2.375rem]">
          <ForgotPasswordHeading text={verifiedHeading} />
        </div>
        <MainButton buttonName="Continue" handleClick={() => navigate("/")} />
      </div>
    </>
  );
};

export default EmailVerified;
