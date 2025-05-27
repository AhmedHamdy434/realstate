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

const ForgotPassword = () => {
  const navigate = useNavigate();
  const forgotPasswordHeading = {
    heading: "Forgot password",
    paragraphs: ["No worries, we’ll send you reset instructions."],
  };
  const inputData: InputType = {
    name: "email",
    type: "email",
    placeholder: "Email",
  };
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState(false);

  const [serverError, setServerError] = useState<string[]>([]);
  const [page, setPage] = useState<0 | 1 | 2 | 3>(0);
  const [code, setCode] = useState(Array(6).fill(""));

  const emailVerifiedHeading = {
    heading: "Check your email",
    paragraphs: ["We sent a verification link to", email],
  };
  const newPasswordHeading = {
    heading: "Enter New Password",
    paragraphs: [""],
  };
  const verifiedHeading = {
    heading: "Email verified",
    paragraphs: [
      "Your password has been successfully reset.",
      "Click below to log in magically.",
    ],
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(false);
  };
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };
  const handleChangeConfirmNewPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(e.target.value);
  };
  const handleClickForgotPassword = async () => {
    setServerError([]);
    if (!email) {
      setError(true);
      return;
    }
    const res = await forgotPasswordAction(email);
    if (res.success) {
      console.log(res.message);
      setPage(1);
    } else {
      setServerError(res.message);
    }
  };
  const handleClickCode = async () => {
    setServerError([]);
    const verrificationCode = code.join("");
    if (verrificationCode.length === 6) {
      const res = await verifyEmailAction(verrificationCode);
      if (res.success) {
        console.log(res.message);
        setPage(2);
      } else {
        setServerError(res.message);
      }
    }
  };
  const handleClickNewPassword = async () => {
    if (password !== newPassword) {
      setServerError(["password does not match"]);
      return;
    } else {
      const res = await newPasswordAction(email, password);
      if (res.success) {
        console.log(res.message);
        setPage(3);
      } else {
        setServerError(res.message);
      }
    }
  };
  return (
    <>
      <AuthHeader />
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
            <div>
              {serverError.length > 0 &&
                serverError.map((message, index) => (
                  <div
                    key={index}
                    className="text-xs text-error text-start mt-2"
                  >
                    {message}
                  </div>
                ))}
            </div>
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
          <div>
            {serverError.length > 0 &&
              serverError.map((message, index) => (
                <div key={index} className="text-xs text-error text-start mt-2">
                  {message}
                </div>
              ))}
          </div>
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

      {/* page2 */}
      {page === 2 && (
        <div className="w-full text-center max-w-3xl mx-auto py-[7.875rem]">
          <ForgotPasswordHeading text={newPasswordHeading} />
          <div className="mt-6 mb-[3.5rem] mx-auto max-w-[28.125rem] ">
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

            <div>
              {serverError.length > 0 &&
                serverError.map((message, index) => (
                  <div
                    key={index}
                    className="text-xs text-error text-start mt-2"
                  >
                    {message}
                  </div>
                ))}
            </div>
          </div>
          <MainButton
            buttonName="confirm new password"
            handleClick={handleClickNewPassword}
          />
          <BackLink goto="/auth/login" value="Back to log in" />
        </div>
      )}

      {/* page4 */}
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
