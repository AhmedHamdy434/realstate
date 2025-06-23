import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import CheckYourEmail from "../features/auth/pages/CheckYourEmail";
import EmailVerified from "../features/auth/pages/EmailVerified";
import HomePage from "../features/Home/pages/HomePage";
import { PublicRoute } from "./routes/PublicRoute";
import SocialCallback from "../features/auth/pages/SocialCallback";
import Footer from "../shared/components/template/Footer";
import RentSearch from "../features/Rent/pages/RentSearch";
// import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth">
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="forgotpassword"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />

          <Route
            path="checkyouremail"
            element={
              <PublicRoute>
                <CheckYourEmail />
              </PublicRoute>
            }
          />
          <Route
            path="emailverifing/:activationToken"
            element={
              <PublicRoute>
                <EmailVerified />
              </PublicRoute>
            }
          />
          <Route
            path="callback"
            element={
              <PublicRoute>
                <SocialCallback />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/rentsearch" element={<RentSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
