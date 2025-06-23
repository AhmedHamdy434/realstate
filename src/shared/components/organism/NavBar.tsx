import { Link, useNavigate } from "react-router-dom";
import RecButton from "../atoms/RecButton";
import { logout, type User } from "../../../features/auth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faClipboardList,
  faEnvelope,
  faFlag,
  faHouse,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../assets/avatar.png";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../atoms/PrimaryButton";

const NavBar = ({ currentPage }: { currentPage: string }) => {
  const { token }: { user: User | null; token: string | null } = useSelector(
    (state: RootState) => state.user
  );
  const barRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [barMenu, setBarMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node))
        setBarMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node))
        setUserMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <>
      <nav className="flex-1 text-lg leading-6.5 tracking-[0.5px] lg:ps-4 lg:flex items-center justify-between">
        <div className="links hidden lg:flex justify-between items-center gap-6 xl:gap-12 h-10">
          {navBarItems.map(({ name, goto }) =>
            name === currentPage ? (
              <div
                key={name}
                className="flex flex-col justify-between items-center h-full"
              >
                <Link className="text-main font-bold block" to={goto}>
                  {name}
                </Link>
                <span className="bg-main block w-1.5 h-1.5 rounded-full"></span>
              </div>
            ) : (
              <Link
                key={name}
                className="text-maingray font-semibold"
                to={goto}
              >
                {name}
              </Link>
            )
          )}
        </div>
        {token ? (
          <div className="flex gap-6 flex-1 text-end justify-end items-center">
            <PrimaryButton
              className="hidden lg:block"
              buttonName="List your property"
              handleClick={() => navigate("/")}
            />

            <div className="w-10 h-10 relative flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-neutrals4 w-6 h-6"
              />
              <div className="w-3 h-3 rounded-full bg-primary4 absolute end-0 top-0"></div>
            </div>
            <div ref={userRef}>
              <img
                src={Avatar}
                alt="Avatar"
                className="w-8 lg:w-10 cursor-pointer"
                onClick={() => setUserMenu(!userMenu)}
              />
              {userMenu && (
                <div className="absolute top-full end-4 z-30 w-[90%] max-w-86 rounded-[1.25rem] p-4 space-y-1 bg-neutrals8">
                  {userAccountDropMenuOne.map(({ icon, name, goto }) => (
                    <Link
                      key={name}
                      className="text-neutrals4 font-bold text-sm text-start w-full p-3 flex gap-3 items-center"
                      to={goto}
                    >
                      {icon}
                      {name}
                    </Link>
                  ))}
                  <hr className="text-neutrals6 my-4" />
                  {userAccountDropMenuTwo.map(({ icon, name, goto }) => (
                    <Link
                      key={name}
                      className="text-neutrals4 font-bold text-sm text-start w-full p-3 flex gap-3 items-center"
                      to={goto}
                    >
                      {icon}
                      {name}
                    </Link>
                  ))}
                  {
                    <div className="buttons flex gap-2 mt-4">
                      <PrimaryButton
                        buttonName="Account"
                        className="w-full"
                        colored
                        handleClick={() => navigate("/")}
                      />
                      <PrimaryButton
                        buttonName="Log out"
                        className="w-full"
                        handleClick={() => dispatch(logout())}
                      />
                    </div>
                  }
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="profile hidden lg:block space-x-2">
            <RecButton
              buttonName="Sign up"
              colored={false}
              handleClick={() => navigate("/auth/register")}
            />

            <RecButton
              buttonName="Login"
              colored
              handleClick={() => navigate("/auth/login")}
            />
          </div>
        )}
      </nav>
      <div className="lg:hidden me-5" ref={barRef}>
        <FontAwesomeIcon
          className="w-5 cursor-pointer"
          icon={faBars}
          onClick={() => setBarMenu(!barMenu)}
        />
        {barMenu && (
          <div className="absolute top-full end-4 z-30 lg:hidden w-[90%] max-w-86 rounded-[1.25rem] p-4 space-y-1 bg-neutrals8">
            {navBarItems.map(({ name, goto }) => (
              <Link
                key={name}
                className="text-neutrals4 font-bold text-sm text-start block w-full p-3"
                to={goto}
              >
                {name}
              </Link>
            ))}
            <hr className="text-neutrals6 my-4" />
            {token ? (
              <PrimaryButton
                buttonName="List your property"
                className="w-full"
                handleClick={() => navigate("/")}
              />
            ) : (
              <div className="buttons flex gap-2">
                <PrimaryButton
                  buttonName="Sign up"
                  className="w-full"
                  colored
                  handleClick={() => navigate("/auth/register")}
                />

                <PrimaryButton
                  buttonName="Log In"
                  className="w-full"
                  handleClick={() => navigate("/auth/login")}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
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
const userAccountDropMenuOne = [
  {
    icon: <FontAwesomeIcon icon={faMessage} className="w-6" />,
    name: "Messages",
    goto: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} className="w-6" />,
    name: "Bookings",
    goto: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className="w-6" />,
    name: "Wishlists",
    goto: "/",
  },
];
const userAccountDropMenuTwo = [
  {
    icon: <FontAwesomeIcon icon={faClipboardList} className="w-6" />,
    name: "List your property",
    goto: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faFlag} className="w-6" />,
    name: "Host an experience",
    goto: "/",
  },
];
