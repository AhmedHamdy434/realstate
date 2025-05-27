import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import CheckYourEmail from "../features/auth/pages/CheckYourEmail";
// import EmailVerified from "../features/auth/pages/EmailVerified";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
        <Route path="/auth/checkyouremail" element={<CheckYourEmail />} />
        {/* <Route path="/auth/emailverified" element={<EmailVerified />} /> */}
        {/* <Route path="/auth/newpassword" element={}/> */}

        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
