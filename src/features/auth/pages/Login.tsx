import MainButton from "../../../shared/components/atoms/MainButton";
import LoginOne from "../../../assets/auth/login1.png";
import LoginTwo from "../../../assets/auth/login2.png";
import LoginThree from "../../../assets/auth/login3.png";
import FormHeading from "../components/atoms/FormHeading";
import MainLabelAndInput from "../components/molecules/MainLabelAndInput";
import { type InputType } from "../types/authTypes";
import { Link, useNavigate } from "react-router-dom";
import SocialLogos from "../components/molecules/SocialLogos";
import ImageSide from "../components/organism/ImageSide";
import { useState } from "react";
import AuthHeader from "../components/molecules/AuthHeader";
import { loginAction } from "../utils/authActions";
import ServerError from "../components/atoms/ServerError";

export default function Login() {
  // ui data
  const heading = {
    mainHead: "Log in",
    secHead: "Don’t have an acount? ",
    spanHead: "Sign up",
  };
  const emailOrPhoneData: InputType = {
    name: "email",
    type: "email",
    placeholder: "Email",
  };
  const passwordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "Password",
  };
  const imageSideLogin = {
    heading1: "Welcome back!",
    heading2: "Find your next home with ease",
    images: [LoginOne, LoginTwo, LoginThree],
  };

  // state management
  const initialError = {
    email: false,
    password: false,
  };
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(initialError);
  const [serverError, setServerError] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError((prevError) => ({
      ...prevError,
      [e.target.name]: false,
    }));
  };

  // handle Function
  const handleSubmit = async (e: React.FormEvent) => {
    setServerError([]);
    e.preventDefault();
    const newErrors = {
      email: !form.email,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.email || !form.password) return;
    // Logging in
    const res = await loginAction(form.email, form.password);
    if (res.success) navigate("/");
    else {
      setServerError(res.message);
    }
  };

  return (
    <>
      <AuthHeader />
      <div className="flex items-center border-t-[1px] border-borderColor w-[93%] mx-auto">
        <ImageSide imageSide={imageSideLogin} />

        <div className="flex-1 flex flex-col items-center pt-[3.25rem] lg:pt-0 max-w-full">
          <FormHeading heading={heading} />
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" mt-[3.875rem] space-y-6"
          >
            <MainLabelAndInput
              hasError={error.email}
              handleChange={handleChange}
              label="Email"
              inputData={emailOrPhoneData}
            />
            <div className="max-w-[28.125rem]">
              <MainLabelAndInput
                hasError={error.password}
                handleChange={handleChange}
                label="Password"
                inputData={passwordData}
              />
              <Link
                className="block w-fit text-xl text-main font-semibold ms-auto underline my-3"
                to="/auth/forgotpassword"
              >
                Forget your password
              </Link>
            </div>
            <ServerError serverError={serverError} />
            <div className="text-center">
              <MainButton type="submit" buttonName="log in" />
            </div>
          </form>
          <SocialLogos />
        </div>
      </div>
    </>
  );
}
