import LoginOne from "../../../assets/auth/login1.png";
import LoginTwo from "../../../assets/auth/login2.png";
import LoginThree from "../../../assets/auth/login3.png";
import FormHeading from "../components/atoms/FormHeading";
import SocialLogos from "../components/molecules/SocialLogos";
import ImageSide from "../components/organism/ImageSide";
import AuthHeader from "../components/molecules/AuthHeader";
import LoginForm from "../components/template/LoginForm";

export default function Login() {
  // ui data
  const heading = {
    mainHead: "Log in",
    secHead: "Don’t have an acount? ",
    spanHead: "Sign up",
  };

  const imageSideLogin = {
    heading1: "Welcome back!",
    heading2: "Find your next home with ease",
    images: [LoginOne, LoginTwo, LoginThree],
  };

  return (
    <>
      <AuthHeader />
      <div className="flex items-center border-t border-borderColor w-[93%] mx-auto">
        <ImageSide imageSide={imageSideLogin} />
        <div className="flex-1 flex flex-col items-center pt-13 lg:pt-0 max-w-full">
          <FormHeading heading={heading} />
          <LoginForm />
          <SocialLogos />
        </div>
      </div>
    </>
  );
}
