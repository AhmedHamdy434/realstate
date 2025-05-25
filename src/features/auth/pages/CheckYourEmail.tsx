import { useState } from "react";
import MainButton from "../../../shared/components/atoms/MainButton";
import BackLink from "../components/atoms/BackLink";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";

import { useNavigate } from "react-router-dom";
import SpecialInputs from "../components/atoms/SpicialInputs";

const CheckYourEmail = () => {
  const navigate = useNavigate();

  const [manual, setManual] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));

  const emailOrPhone = localStorage.getItem("email");

  const emailVerifiedHeading = {
    heading: "Check your email",
    paragraphs: ["We sent a verification link to", emailOrPhone as string],
  };
  const handleClick = () => {
    if (!manual) setManual(true);
    else {
      const verrificationCode = code.join("");
      if (verrificationCode.length === 6) navigate("/auth/emailverified");
    }
  };
  return (
    <>
      <AuthHeader />
      <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
        <ForgotPasswordHeading text={emailVerifiedHeading} />
        {manual && <SpecialInputs code={code} setCode={setCode} />}
        <div className="mt-[3.5rem]">
          <MainButton
            buttonName={manual ? "Verify email" : "Enter code manually"}
            handleClick={handleClick}
          />
        </div>
        {manual && (
          <h6 className="text-lg mt-6">
            Didn’t receive the email?{" "}
            <span className="text-main font-semibold">Click to resend</span>
          </h6>
        )}
        <BackLink goto="/auth/login" value="Back to log in" />
      </div>
    </>
  );
};

export default CheckYourEmail;
