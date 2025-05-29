import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../shared/components/atoms/MainButton";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { logout, type User } from "../../features/auth/userSlice";
import Header from "../../shared/components/organism/Header";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, token }: { user: User | null; token: string | null } =
    useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Header currentPage="Home" />
      {token ? (
        <div>
          <h3> user name :{user?.userName}</h3>
          <h5>email :{user?.email}</h5>
          <h5>token :{token}</h5>
          <MainButton
            buttonName="log out"
            handleClick={() => dispatch(logout())}
          />
        </div>
      ) : (
        <MainButton
          buttonName="To Login Page"
          handleClick={() => navigate("/auth/login")}
        />
      )}
    </>
  );
};

export default HomePage;
