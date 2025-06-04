import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { InputType } from "../../types/authTypes";
import { registerAction } from "../../utils/authActions";
import MainLabelAndInput from "../molecules/MainLabelAndInput";
import ServerError from "../atoms/ServerError";
import MainButton from "../../../../shared/components/atoms/MainButton";

const RegisterForm = () => {
  const NameData: InputType = {
    name: "name",
    type: "text",
    placeholder: "Name",
  };
  const emailData: InputType = {
    name: "email",
    type: "email",
    placeholder: "Email",
  };
  const passwordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "Password",
  };
  const initialError = {
    name: false,
    email: false,
    password: false,
  };

  // state management
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [error, setError] = useState(initialError);
  const [serverError, setServerError] = useState<string[]>([]);

  // handle functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError((prevError) => ({
      ...prevError,
      [e.target.name]: false,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    // handle empty inputs
    setServerError([]);
    e.preventDefault();
    const newErrors = {
      name: !form.name,
      email: !form.email,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.name || !form.email || !form.password) return;
    // sign up
    const res = await registerAction(form.email, form.name, form.password);
    if (res.success) {
      localStorage.setItem("email", form.email);
      navigate("/auth/checkyouremail");
    } else {
      setServerError(res.message);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" mt-[3.875rem] space-y-6"
    >
      <MainLabelAndInput
        hasError={error.name}
        handleChange={handleChange}
        label="Name"
        inputData={NameData}
      />
      <MainLabelAndInput
        hasError={error.email}
        handleChange={handleChange}
        label="Email"
        inputData={emailData}
      />
      <div className="max-w-[28.125rem]">
        <MainLabelAndInput
          hasError={error.password}
          handleChange={handleChange}
          label="Password"
          inputData={passwordData}
        />
      </div>
      <ServerError serverError={serverError} />
      <div className="text-center mt-5">
        <MainButton type="submit" buttonName="Sign Up" />
      </div>
    </form>
  );
};

export default RegisterForm;
