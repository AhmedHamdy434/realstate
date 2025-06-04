import { Link, useNavigate } from "react-router-dom";
import RecButton from "../atoms/RecButton";
import { logout, type User } from "../../../features/auth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

const NavBar = ({ currentPage }: { currentPage: string }) => {
  const { token }: { user: User | null; token: string | null } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <>
      <div className="bg-red-500 w-10 h-10 lg:hidden"></div>
      <nav className="hidden text-lg leading-6.5 tracking-[0.5px] lg:flex items-center gap-8 xl:gap-[4.5rem]">
        <div className="links flex justify-between items-center gap-6 xlgap-12 h-[2.5rem]">
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
        <div className="profile space-x-2">
          <RecButton buttonName="Sign in" colored={false} />

          <RecButton
            buttonName={token ? "Logout" : "Login"}
            colored
            handleClick={() =>
              token ? dispatch(logout()) : navigate("/auth/login")
            }
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
// w-[33.625rem]
