import GoogleLogo from "../../../../assets/auth/googleLogo.png";
import FacebookLogo from "../../../../assets/auth/facebookLogo.png";
import MailLogo from "../../../../assets/auth/mail.png";

const SocialLogos = () => {
  return (
    <div className="text-center pt-[2.625rem]">
      <h6 className="text-xl mb-[3.375rem] text-text2">Or</h6>
      <div className="flex gap-[3.25rem]">
        {[GoogleLogo, FacebookLogo, MailLogo].map((logo, index) => (
          <button
            key={index}
            className="w-[5.625rem] h-[5.625rem] rounded-full border-[1px] flex justify-center items-center"
          >
            <img src={logo} alt="logo" width={44} height={44} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogos;
