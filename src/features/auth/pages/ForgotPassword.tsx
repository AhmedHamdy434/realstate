import { useState } from "react";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";
import MainLabelAndInput from "../components/molecules/MainLabelAndInput";
import type { InputType } from "../types/authTypes";
import MainButton from "../../../shared/components/atoms/MainButton";
import BackLink from "../components/atoms/BackLink";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const forgotPasswordHeading = {
    heading: "Forgot password",
    paragraphs: ["No worries, we’ll send you reset instructions."],
  };
  const inputData: InputType = {
    name: "email",
    type: "text",
    placeholder: "Email or phone number",
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(false);
  };
  const handleClick = () => {
    if (email) {
      localStorage.setItem("email", email);
      navigate("/auth/checkyouremail");
    } else setError(true);
  };
  return (
    <>
      <AuthHeader />
      <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
        <ForgotPasswordHeading text={forgotPasswordHeading} />
        <div className="mt-6 mb-[3.5rem] mx-auto max-w-[28.125rem] ">
          <MainLabelAndInput
            hasError={error}
            label="Email or phone number"
            inputData={inputData}
            handleChange={handleChange}
          />
        </div>
        <MainButton buttonName="Reset password" handleClick={handleClick} />
        <BackLink goto="/auth/login" value="Back to log in" />
      </div>
    </>
  );
};

export default ForgotPassword;
