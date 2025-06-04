import Logo from "../../../assets/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="bg-main text-white leading-6.5">
      <div className="container min-h-98 flex justify-between items-center">
        <div className="">
          <img src={Logo} alt="logo" loading="lazy" className="w-48" />
          <p className="mt-3">
            We have built our reputation as true local area experts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
