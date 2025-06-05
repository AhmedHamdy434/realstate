import GoogleLogo from "../../../../assets/auth/googleLogo.png";
import FacebookLogo from "../../../../assets/auth/facebookLogo.png";
import MailLogo from "../../../../assets/auth/mail.png";

const SocialLogos = () => {
  const handleGoogleClick = async () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };
  return (
    <div className="text-center pt-10.5">
      <h6 className="text-xl mb-13.5 text-text2">Or</h6>
      <div className="flex gap-13 mb-8 lg:mb-0">
        {[GoogleLogo, FacebookLogo, MailLogo].map((logo, index) => (
          <button
            key={index}
            className="w-15 h-15 xs:w-22.5 xs:h-22.5 rounded-full border flex justify-center items-center"
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
