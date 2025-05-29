import { useState } from "react";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";
import MainLabelAndInput from "../components/molecules/MainLabelAndInput";
import type { InputType } from "../types/authTypes";
import MainButton from "../../../shared/components/atoms/MainButton";
import BackLink from "../components/atoms/BackLink";
import { useNavigate } from "react-router-dom";
import {
  forgotPasswordAction,
  newPasswordAction,
  verifyEmailAction,
} from "../utils/authActions";
import SpecialInputs from "../components/atoms/SpicialInputs";
import VerifiedMark from "../../../assets/auth/verified.png";
import ServerError from "../components/atoms/ServerError";

const ForgotPassword = () => {
  // state management
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // newpassword
  const [newPassword, setNewPassword] = useState(""); // repeat password
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState<string[]>([]);
  const [page, setPage] = useState<0 | 1 | 2 | 3>(0); // forgotpassword  0  / code  1  / new password  2 /  password changed  3
  const [code, setCode] = useState(Array(6).fill(""));

  // ui data
  // 0 forgotpassword data
  const forgotPasswordHeading = {
    heading: "Forgot password",
    paragraphs: ["No worries, we’ll send you reset instructions."],
  };
  const inputData: InputType = {
    name: "email",
    type: "email",
    placeholder: "Email",
  };

  // 1 code data
  const emailVerifiedHeading = {
    heading: "Check your email",
    paragraphs: ["We sent a verification code to", email],
  };

  // 2 new password data
  const inputPasswordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "password",
  };
  const inputConfirmPasswordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "confirm password",
  };
  const newPasswordHeading = {
    heading: "Enter New Password",
    paragraphs: [""],
  };

  // 3 password changed data
  const verifiedHeading = {
    heading: "Password changed",
    paragraphs: [
      "Your password has been successfully reset.",
      "Click below to log in magically.",
    ],
  };

  // handle function
  // 0 forgotpassword function
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(false);
  };
  const handleClickForgotPassword = async () => {
    setServerError([]);
    if (!email) {
      setError(true);
      return;
    }
    const res = await forgotPasswordAction(email);
    if (res.success) setPage(1);
    else {
      setServerError(res.message);
    }
  };

  // 1 code function
  const handleClickCode = async () => {
    setServerError([]);
    const verrificationCode = code.join("");
    if (verrificationCode.length === 6) {
      const res = await verifyEmailAction(verrificationCode);
      if (res.success) setPage(2);
      else {
        setServerError(res.message);
      }
    }
  };

  // 2 new password function
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };
  const handleChangeConfirmNewPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(e.target.value);
  };
  const handleClickNewPassword = async () => {
    setServerError([]);
    if (password !== newPassword) {
      setServerError(["password does not match"]);
      return;
    } else {
      const res = await newPasswordAction(email, password);
      if (res.success) setPage(3);
      else {
        setServerError(res.message);
      }
    }
  };

  return (
    <>
      <AuthHeader />
      {/* page 0 */}
      {page === 0 && (
        <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
          <ForgotPasswordHeading text={forgotPasswordHeading} />
          <div className="mt-6 mb-[3.5rem] mx-auto max-w-[28.125rem] ">
            <MainLabelAndInput
              hasError={error}
              label="Email"
              inputData={inputData}
              handleChange={handleChangeEmail}
            />
            <ServerError serverError={serverError} />
          </div>
          <MainButton
            buttonName="Reset password"
            handleClick={handleClickForgotPassword}
          />
          <BackLink goto="/auth/login" value="Back to log in" />
        </div>
      )}

      {/* page 1 */}
      {page === 1 && (
        <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
          <ForgotPasswordHeading text={emailVerifiedHeading} />
          {<SpecialInputs code={code} setCode={setCode} />}
          <ServerError serverError={serverError} />

          <div className="mt-[3.5rem]">
            <MainButton
              buttonName="Verify email"
              handleClick={handleClickCode}
            />
          </div>
          {
            <h6 className="text-lg mt-6">
              Didn’t receive the email?{" "}
              <span
                onClick={handleClickForgotPassword}
                className="text-main font-semibold cursor-pointer"
              >
                Click to resend
              </span>
            </h6>
          }
          <BackLink goto="/auth/login" value="Back to log in" />
        </div>
      )}

      {/* page 2 */}
      {page === 2 && (
        <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
          <ForgotPasswordHeading text={newPasswordHeading} />
          <div className="mt-6 mb-[3.5rem] mx-auto max-w-[28.125rem] space-y-4">
            <MainLabelAndInput
              hasError={error}
              label="password"
              inputData={inputPasswordData}
              handleChange={handleChangeNewPassword}
            />
            <MainLabelAndInput
              hasError={false}
              label="password"
              inputData={inputConfirmPasswordData}
              handleChange={handleChangeConfirmNewPassword}
            />
            <ServerError serverError={serverError} />
          </div>
          <MainButton
            buttonName="confirm new password"
            handleClick={handleClickNewPassword}
          />
          <BackLink goto="/auth/login" value="Back to log in" />
        </div>
      )}

      {/* page 3 */}
      {page === 3 && (
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
      )}
    </>
  );
};

export default ForgotPassword;
