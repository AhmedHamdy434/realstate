import GoogleLogo from "../../../../assets/auth/googleLogo.png";
import FacebookLogo from "../../../../assets/auth/facebookLogo.png";
import MailLogo from "../../../../assets/auth/mail.png";

const SocialLogos = () => {
  const handleGoogleClick = async () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };
  return (
    <div className="text-center pt-[2.625rem]">
      <h6 className="text-xl mb-[3.375rem] text-text2">Or</h6>
      <div className="flex gap-[3.25rem]">
        {[GoogleLogo, FacebookLogo, MailLogo].map((logo, index) => (
          <button
            key={index}
            className="w-13 h-13 xs:w-[5.625rem] xs:h-[5.625rem] rounded-full border-[1px] flex justify-center items-center"
            onClick={index === 0 ? handleGoogleClick : () => console.log(index)}
          >
            <img src={logo} alt="logo" className="w-7 xs:w-11" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogos;
