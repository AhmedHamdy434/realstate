import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { InputType } from "../../types/authTypes";
import {
  isValidEmail,
  isValidPhone,
  registerAction,
} from "../../utils/authActions";
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
    name: "emailOrPhone",
    type: "text",
    placeholder: "Email or phone number",
  };
  const passwordData: InputType = {
    name: "password",
    type: "password",
    placeholder: "Password",
  };
  const initialError = {
    name: false,
    emailOrPhone: false,
    password: false,
  };

  // state management
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emailOrPhone: "",
    name: "",
    password: "",
  });
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
      emailOrPhone: !form.emailOrPhone,
      password: !form.password,
    };
    setError(newErrors);
    if (!form.name || !form.emailOrPhone || !form.password) return;
    // sign up
    const email = isValidEmail(form.emailOrPhone) ? form.emailOrPhone : "";
    const phone = isValidPhone(form.emailOrPhone) ? form.emailOrPhone : "";
    if (!email && !phone) {
      setServerError(["Please enter a valid email or phone number"]);
    } else {
      const res = await registerAction(email, phone, form.name, form.password);
      if (res.success && email) {
        navigate("/auth/checkyouremail");
      } else if (res.success && phone) {
        localStorage.setItem("phone", phone);
        navigate("/auth/checkyouremail");
      } else {
        setServerError(res.message);
      }
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full xs:w-[70%] sm:w-112.5 mt-15.5 space-y-6"
    >
      <MainLabelAndInput
        hasError={error.name}
        handleChange={handleChange}
        label="Name"
        inputData={NameData}
      />
      <MainLabelAndInput
        hasError={error.emailOrPhone}
        handleChange={handleChange}
        label="Email or phone number"
        inputData={emailData}
      />
      <div>
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
