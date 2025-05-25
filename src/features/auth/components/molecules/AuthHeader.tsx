import Logo from "../../../../assets/logo.svg";

const AuthHeader = () => {
  return (
    <div className="container">
      <div className="relative w-[211px] h-[118px] flex justify-center items-center -top-1">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default AuthHeader;
