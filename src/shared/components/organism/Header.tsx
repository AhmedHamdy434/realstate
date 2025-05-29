import { Link } from "react-router-dom";
import LogoPic from "../atoms/LogoPic";

const Header = ({ currentPage }: { currentPage: string }) => {
  const navBarItems = [
    {
      name: "Home",
      goto: "/",
    },
    {
      name: "Property",
      goto: "/",
    },
    {
      name: "About",
      goto: "/",
    },
    {
      name: "Service",
      goto: "/",
    },
    {
      name: "Contact",
      goto: "/",
    },
  ];

  return (
    <header className="px-[3.25rem] h-[7.875rem] flex justify-between items-center">
      <LogoPic />
      <nav className="text-lg leading-6.5 tracking-[0.5px]">
        <div className="links flex justify-between items-center w-[33.625rem] h-[2.5rem]">
          {navBarItems.map(({ name, goto }) =>
            name === currentPage ? (
              <div className="flex flex-col justify-between items-center h-full">
                <Link className="text-main font-bold block" to={goto}>
                  {name}
                </Link>
                <span className="bg-main block w-1.5 h-1.5 rounded-full"></span>
              </div>
            ) : (
              <Link className="text-maingray font-semibold" to={goto}>
                {name}
              </Link>
            )
          )}
        </div>
        <div className="profile"></div>
      </nav>
    </header>
  );
};

export default Header;
