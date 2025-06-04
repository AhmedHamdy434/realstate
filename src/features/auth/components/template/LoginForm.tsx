import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../../utils/authActions";
import MainLabelAndInput from "../molecules/MainLabelAndInput";
import ServerError from "../atoms/ServerError";
import MainButton from "../../../../shared/components/atoms/MainButton";
import type { InputType } from "../../types/authTypes";

const LoginForm = () => {
  const emailOrPhoneData: InputType = {
    name: "email",
    type: "email",
    placeholder: "Email",
  };
  const passwordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "Password",
  };

  // state management
  const initialError = {
    email: false,
    password: false,
  };
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(initialError);
  const [serverError, setServerError] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError((prevError) => ({
      ...prevError,
      [e.target.name]: false,
    }));
  };

  // handle Function
  const handleSubmit = async (e: React.FormEvent) => {
    setServerError([]);
    e.preventDefault();
    const newErrors = {
      email: !form.email,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.email || !form.password) return;
    // Logging in
    const res = await loginAction(form.email, form.password);
    if (res.success) navigate("/");
    else {
      setServerError(res.message);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className=" mt-15.5 space-y-6">
      <MainLabelAndInput
        hasError={error.email}
        handleChange={handleChange}
        label="Email"
        inputData={emailOrPhoneData}
      />
      <div className="max-w-[28.125rem]">
        <MainLabelAndInput
          hasError={error.password}
          handleChange={handleChange}
          label="Password"
          inputData={passwordData}
        />
        <Link
          className="block w-fit text-xl text-main font-semibold ms-auto underline my-3"
          to="/auth/forgotpassword"
        >
          Forget your password
        </Link>
      </div>
      <ServerError serverError={serverError} />
      <div className="text-center">
        <MainButton type="submit" buttonName="log in" />
      </div>
    </form>
  );
};

export default LoginForm;
