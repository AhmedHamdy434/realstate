import { useNavigate, useParams } from "react-router-dom";
import MainButton from "../../../shared/components/atoms/MainButton";
import ForgotPasswordHeading from "../components/atoms/ForgotPasswordHeading";
import AuthHeader from "../components/molecules/AuthHeader";
import VerifiedMark from "../../../assets/auth/verified.png";
import { useEffect, useState } from "react";
import { getNewTokenAction } from "../utils/authActions";

const EmailVerified = () => {
  const { activationToken } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verifiedHeading = {
    heading: "Email verified",
    paragraphs: [
      "Your password has been successfully reset.",
      "Click below to log in magically.",
    ],
  };

  useEffect(() => {
    const getNewToken = async () => {
      if (!activationToken) {
        setIsLoading(false);
        setError("Activation token is missing.");
        return;
      }

      const res = await getNewTokenAction(activationToken);
      if (res.success) {
        console.log(res.message);
      } else {
        console.log(res.message);
        setError(Array.isArray(res.message) ? res.message[0] : res.message);
      }
      setIsLoading(false);
    };

    getNewToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AuthHeader />
      {!isLoading &&
        (error ? (
          <h2>{error}</h2>
        ) : (
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
            <MainButton
              buttonName="Continue"
              handleClick={() => navigate("/")}
            />
          </div>
        ))}
    </>
  );
};

export default EmailVerified;
