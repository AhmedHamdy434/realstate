import SignupOne from "../../../assets/auth/signup1.png";
import SignupTwo from "../../../assets/auth/signup2.png";
import SignupThree from "../../../assets/auth/signup3.png";
import FormHeading from "../components/atoms/FormHeading";
import SocialLogos from "../components/molecules/SocialLogos";
import ImageSide from "../components/organism/ImageSide";
import AuthHeader from "../components/molecules/AuthHeader";

import RegisterForm from "../components/template/RegisterForm";

export default function Register() {
  // ui data
  const heading = {
    mainHead: "Create an account",
    secHead: "Already have an account? ",
    spanHead: "Log in",
  };
  const imageSideLogin = {
    heading1: "Find your next home with ease",
    images: [SignupOne, SignupTwo, SignupThree],
  };

  return (
    <>
      <AuthHeader />
      <div className="flex items-center border-t-[1px] border-borderColor w-[93%] mx-auto">
        <ImageSide imageSide={imageSideLogin} />
        <div className="flex-1 flex flex-col items-center pt-[3.25rem] lg:pt-0 max-w-full">
          <FormHeading heading={heading} />
          <RegisterForm />
          <SocialLogos />
        </div>
      </div>
    </>
  );
}
