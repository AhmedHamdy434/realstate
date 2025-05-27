import BackLink from "../components/atoms/BackLink";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";

import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

const CheckYourEmail = () => {
  const email = useSelector((state: RootState) => state.user.user?.email);
  if (!email) return;
  const emailVerifiedHeading = {
    heading: "Check your email",
    paragraphs: ["We sent a verification link to", email],
  };

  return (
    <>
      <AuthHeader />
      <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
        <ForgotPasswordHeading text={emailVerifiedHeading} />
        <BackLink goto="/auth/login" value="Back to log in" />
      </div>
    </>
  );
};

export default CheckYourEmail;
