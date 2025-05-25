import MainButton from "../../../shared/components/atoms/MainButton";
import LoginOne from "../../../assets/auth/login1.png";
import LoginTwo from "../../../assets/auth/login2.png";
import LoginThree from "../../../assets/auth/login3.png";
import FormHeading from "../components/atoms/FormHeading";
import MainLabelAndInput from "../components/molecules/MainLabelAndInput";
import { type InputType } from "../types/authTypes";
import { Link } from "react-router-dom";
import SocialLogos from "../components/molecules/SocialLogos";
import ImageSide from "../components/organism/ImageSide";
import { useState } from "react";
import AuthHeader from "../components/molecules/AuthHeader";
// import { axiosInstance } from "../../../axios/config";

export default function Login() {
  const heading = {
    mainHead: "Log in",
    secHead: "Don’t have an acount? ",
    spanHead: "Sign up",
  };
  const emailOrPhoneData: InputType = {
    name: "emailOrPhone",
    type: "text",
    placeholder: "Email or phone number",
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
  const initialError = {
    emailOrPhone: false,
    password: false,
  };
  // const navigate = useNavigate();
  const [form, setForm] = useState({ emailOrPhone: "", password: "" });
  const [error, setError] = useState(initialError);
  // const [serverError, setServerError] = useState<ErrorType>({
  //   success: true,
  //   message: "",
  // });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError((prevError) => ({
      ...prevError,
      [e.target.name]: false,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      emailOrPhone: !form.emailOrPhone,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.emailOrPhone || !form.password) return;

    console.log("email", form.emailOrPhone);
    console.log("password", form.password);
    // navigate("/");

    //   const res = await axiosInstance.post(
    //     "/auth/Login",
    //     {
    //       email: form.emailOrPhone, // Assuming it is email
    //       password: form.password,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   ).then(function (response) {
    //     console.log(response ,"Logged in successfully");
    //     navigate("/");
    //   }).catch (err: any) {
    //   // ⛔ Axios returns errors in `err.response`
    //   const res = err.response;

    //   if (res?.data?.errors) {
    //     const backendErrors = res.data.errors;

    //     setError({
    //       emailOrPhone: !!backendErrors.email,
    //       password: !!backendErrors.password,
    //     });

    //     setServerError(backendErrors); // This is for displaying full message if needed
    //   } else {
    //     console.log(res?.data?.message || "Something went wrong");
    //   }
    // }
  };
  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  // axiosInstance.post()
  // const res = await fetch("http://localhost:5000/api/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email, password }),
  // });
  // const data = await res.json();
  // console.log(data);
  // };

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
              hasError={error.emailOrPhone}
              handleChange={handleChange}
              label="Email or phone number"
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
