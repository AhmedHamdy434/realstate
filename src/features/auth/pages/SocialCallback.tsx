import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../userSlice";

const SocialCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      dispatch(setToken(token));

      // Redirect to home or dashboard
      navigate("/");
    } else {
      // Handle error
      console.error("No token found in URL");
    }
  }, [searchParams, navigate, dispatch]);

  return <p>Processing authentication...</p>;
};

export default SocialCallback;
