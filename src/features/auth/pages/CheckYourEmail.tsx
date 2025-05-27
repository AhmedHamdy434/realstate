// import { useState } from "react";
// import MainButton from "../../../shared/components/atoms/MainButton";
import BackLink from "../components/atoms/BackLink";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";
// import { useNavigate } from "react-router-dom";
// import SpecialInputs from "../components/atoms/SpicialInputs";
// import { verifyEmailAction } from "../utils/authActions";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

const CheckYourEmail = () => {
  // const navigate = useNavigate();
  const email = useSelector((state: RootState) => state.user.user?.email);
  // const [manual, setManual] = useState(false);
  // const [code, setCode] = useState(Array(6).fill(""));
  // const [serverError, setServerError] = useState<string[]>([]);

  const emailVerifiedHeading = {
    heading: "Check your email",
    paragraphs: ["We sent a verification link to", email as string],
  };
  // const handleClick = async () => {
  //   if (!manual) setManual(true);
  //   else {
  //     const verrificationCode = code.join("");
  //     if (verrificationCode.length === 6) {
  //       const res = await verifyEmailAction(verrificationCode);
  //       if (res.success) {
  //         console.log(res.message);
  //         navigate("/auth/newpassword");
  //       } else {
  //         setServerError(res.message);
  //       }
  //     }
  //   }
  // };
  return (
    <>
      <AuthHeader />
      <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
        <ForgotPasswordHeading text={emailVerifiedHeading} />
        {/* {manual && <SpecialInputs code={code} setCode={setCode} />} */}
        {/* <div className="mt-[3.5rem]">
          <MainButton
            buttonName={manual ? "Verify email" : "Enter code manually"}
            handleClick={handleClick}
          />
        </div> */}
        {/* <div>
          {serverError.length > 0 &&
            serverError.map((message, index) => (
              <div key={index} className="text-xs text-error text-start mt-2">
                {message}
              </div>
            ))}
        </div> */}
        {/* {manual && (
          <h6 className="text-lg mt-6">
            Didn’t receive the email?{" "}
            <span className="text-main font-semibold">Click to resend</span>
          </h6>
        )} */}
        <BackLink goto="/auth/login" value="Back to log in" />
      </div>
    </>
  );
};

export default CheckYourEmail;
