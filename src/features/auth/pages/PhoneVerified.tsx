import { useState } from "react";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import SpecialInputs from "../components/atoms/SpicialInputs";
import ServerError from "../components/atoms/ServerError";
import MainButton from "../../../shared/components/atoms/MainButton";
import { verifyPhoneAction } from "../utils/authActions";
import { useNavigate } from "react-router-dom";
import BackLink from "../components/atoms/BackLink";

const PhoneVerified = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [serverError, setServerError] = useState<string[]>([]);
  const phone = localStorage.getItem("phone");
  const navigate = useNavigate();
  if (!phone) return null;

  const phoneVerifiedHeading = {
    heading: "Check your phone",
    paragraphs: ["We sent a verification code to", phone],
  };

  //  const handleSendOTP = async () => {
  //     setServerError([]);

  //     const res = await forgotPasswordAction(email);
  //     if (res.success) setPage(1);
  //     else {
  //       setServerError(res.message);
  //     }
  //   };

  const handleClickCode = async () => {
    setServerError([]);
    const verrificationCode = code.join("");
    if (verrificationCode.length === 6) {
      const res = await verifyPhoneAction(verrificationCode);
      if (res.success) navigate("/");
      else {
        setServerError(res.message);
      }
    }
  };
  return (
    <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
      <ForgotPasswordHeading text={phoneVerifiedHeading} />
      {<SpecialInputs code={code} setCode={setCode} />}
      <ServerError serverError={serverError} />

      <div className="mt-[3.5rem]">
        <MainButton buttonName="Verify email" handleClick={handleClickCode} />
      </div>
      <BackLink goto="/auth/login" value="Back to log in" />
    </div>
  );
};

export default PhoneVerified;
