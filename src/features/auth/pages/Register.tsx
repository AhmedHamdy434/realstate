import { useState } from "react";
import MainButton from "../../../shared/components/atoms/MainButton";
import SignupOne from "../../../assets/auth/signup1.png";
import SignupTwo from "../../../assets/auth/signup2.png";
import SignupThree from "../../../assets/auth/signup3.png";
import FormHeading from "../components/atoms/FormHeading";
import MainLabelAndInput from "../components/molecules/MainLabelAndInput";
import type { InputType } from "../types/authTypes";
import SocialLogos from "../components/molecules/SocialLogos";
import ImageSide from "../components/organism/ImageSide";
import AuthHeader from "../components/molecules/AuthHeader";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../utils/authActions";
import ServerError from "../components/atoms/ServerError";

export default function Register() {
  // ui data
  const heading = {
    mainHead: "Create an account",
    secHead: "Already have an account? ",
    spanHead: "Log in",
  };
  const NameData: InputType = {
    name: "name",
    type: "text",
    placeholder: "Name",
  };
  const emailData: InputType = {
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
    heading1: "Find your next home with ease",
    images: [SignupOne, SignupTwo, SignupThree],
  };
  const initialError = {
    name: false,
    email: false,
    password: false,
  };

  // state management
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [error, setError] = useState(initialError);
  const [serverError, setServerError] = useState<string[]>([]);

  // handle function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError((prevError) => ({
      ...prevError,
      [e.target.name]: false,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    setServerError([]);
    e.preventDefault();
    const newErrors = {
      name: !form.name,
      email: !form.email,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.name || !form.email || !form.password) return;
    // sign up
    const res = await registerAction(form.email, form.name, form.password);
    if (res.success) {
      localStorage.setItem("email", form.email);
      navigate("/auth/checkyouremail");
    } else {
      setServerError(res.message);
    }
  };

  return (
    <>
      <AuthHeader />
      <div className="flex items-center border-t-[1px] border-borderColor w-[93%] mx-auto">
        <ImageSide imageSide={imageSideLogin} />
        <div className="flex-1 flex flex-col items-center pt-[3.25rem] md:pt-0 max-w-full">
          <FormHeading heading={heading} />
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" mt-[3.875rem] space-y-6"
          >
            <MainLabelAndInput
              hasError={error.name}
              handleChange={handleChange}
              label="Name"
              inputData={NameData}
            />
            <MainLabelAndInput
              hasError={error.email}
              handleChange={handleChange}
              label="Email"
              inputData={emailData}
            />
            <div className="max-w-[28.125rem]">
              <MainLabelAndInput
                hasError={error.password}
                handleChange={handleChange}
                label="Password"
                inputData={passwordData}
              />
            </div>
            <ServerError serverError={serverError} />
            <div className="text-center mt-5">
              <MainButton type="submit" buttonName="Sign Up" />
            </div>
          </form>
          <SocialLogos />
        </div>
      </div>
    </>
  );
}
