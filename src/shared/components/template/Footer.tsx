import { Link } from "react-router-dom";
import LogoPic from "../atoms/LogoPic";
import SvgIcon from "../atoms/SvgIcon";

const Footer = () => {
  const footerItems = [
    {
      name: "About",
      goto: "/",
    },
    {
      name: "Projects",
      goto: "/",
    },
    {
      name: "What We Do",
      goto: "/",
    },
    {
      name: "Press",
      goto: "/",
    },
    {
      name: "Jobs",
      goto: "/",
    },
    {
      name: "Download",
      goto: "/",
    },
  ];
  return (
    <footer className="text-neutrals4">
      <div className="container py-16 lg:pt-20 flex justify-between gap-12 lg:gap-8 flex-col lg:flex-row">
        <LogoPic />
        <div className="items grid grid-cols-2 gap-x-14 gap-y-8 lg:grid-cols-3">
          {footerItems.map(({ name, goto }) => (
            <Link key={name} className="text-sm font-bold" to={goto}>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <h5 className="text-xs text-neutrals2 font-bold uppercase mb-4">
            Join our community 🔥
          </h5>
          <div className="relative">
            <input
              placeholder="Enter your email"
              type="email"
              className="border-2 border-neutrals6 rounded-[5.75rem] py-3.5 ps-4 text-sm leading-6 w-full"
            />
            <div className="bg-main w-8 h-8 rounded-full flex justify-center items-center absolute top-1/2 end-2 -translate-y-1/2">
              <SvgIcon
                iconName="ArrowRightLine"
                svgProp={{ width: "1.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 text-xs leading-5">
        Copyright © 2021 UI8 LLC. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
