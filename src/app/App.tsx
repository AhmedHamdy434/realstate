import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import CheckYourEmail from "../features/auth/pages/CheckYourEmail";
import EmailVerified from "../features/auth/pages/EmailVerified";
import HomePage from "./pages/HomePage";
import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
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
          path="checkyouremail"
          element={
            <PublicRoute>
              <EmailVerified />
            </PublicRoute>
          }
        />
      </Route>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
