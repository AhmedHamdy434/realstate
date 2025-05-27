/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from "../../../app/store";
import { axiosInstance } from "../../../axios/config";
import type { AuthResponseType } from "../types/authTypes";
import { setToken, setUser, type User } from "../userSlice";

//   Register Function
export const registerAction = async (
  email: string,
  name: string,
  password: string,
  phone = "20120713673"
): Promise<AuthResponseType> => {
  const authState = await axiosInstance
    .post(
      "/auth/Signup",
      {
        userName: name,
        email: email,
        password: password,
        phone: phone,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response, "Sign up successfully");
      const token: string = response.data.token;
      localStorage.setItem("token", token);
      const userData = response.data.Data;
      const newUser: User = {
        userName: userData.userName,
        email: userData.email,
        phone: userData.phone,
        role: userData.role,
        active: userData.active,
      };
      store.dispatch(setUser({ user: newUser, token: token }));
      return {
        success: true,
        message: ["Sign up in successfully"],
      };
    })
    .catch(function (err: any) {
      const res = err.response;
      console.log(res);
      let errorMessages = [""];
      if (res.status === 400) {
        const backendErrors = res.data.details;
        errorMessages = backendErrors.map((err: any) => err.message);
      } else {
        const backendErrors = res.data;
        errorMessages = [backendErrors.message];
      }
      return {
        success: false,
        message: errorMessages,
      };
    });
  return authState;
};

// Login Function

export const loginAction = async (
  email: string,
  password: string
): Promise<AuthResponseType> => {
  const authState = await axiosInstance
    .post(
      "/auth/Login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response, response.data.message);

      const token = response.data.token;
      store.dispatch(setToken(token));
      // const userData = response.data.Data;
      // const newUser: AuthState = {
      //   userName: userData.userName,
      //   email: userData.email,
      //   phone: userData.phone,
      //   role: userData.role,
      //   active: userData.active,
      // };

      return {
        success: true,
        message: ["Logged in in successfully"],
      };
    })
    .catch(function (err: any) {
      const res = err.response;
      console.log(res);
      let errorMessages = [""];
      if (res.status === 400) {
        const backendErrors = res.data.details;
        errorMessages = backendErrors.map((err: any) => err.message);
      } else {
        const backendErrors = res.data;
        errorMessages = [backendErrors.message];
      }
      return {
        success: false,
        message: errorMessages,
      };
    });
  return authState;
};

// forgot password

export const forgotPasswordAction = async (
  email: string
): Promise<AuthResponseType> => {
  const authState = await axiosInstance
    .post(
      "/auth/forgotpassword",
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response, "forgot passwored success");

      return {
        success: true,
        message: ["forgot passwored successfully"],
      };
    })
    .catch(function (err: any) {
      const res = err.response;
      console.log(res);
      let errorMessages = [""];
      if (res.status === 400) {
        const backendErrors = res.data.details;
        errorMessages = backendErrors.map((err: any) => err.message);
      } else {
        const backendErrors = res.data;
        errorMessages = [backendErrors.message];
      }
      return {
        success: false,
        message: errorMessages,
      };
    });
  return authState;
};

// verify email

export const verifyEmailAction = async (
  code: string
): Promise<AuthResponseType> => {
  const authState = await axiosInstance
    .post(
      "/auth/verifyResetCode",
      {
        resetCode: code,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response, "forgot passwored success");

      return {
        success: true,
        message: ["forgot passwored successfully"],
      };
    })
    .catch(function (err: any) {
      const res = err.response;
      console.log(res);
      let errorMessages = [""];
      if (res.status === 400) {
        const backendErrors = res.data.details;
        errorMessages = backendErrors.map((err: any) => err.message);
      } else {
        const backendErrors = res.data;
        errorMessages = [backendErrors.message];
      }
      return {
        success: false,
        message: errorMessages,
      };
    });
  return authState;
};

export const newPasswordAction = async (
  email: string,
  newPassword: string
): Promise<AuthResponseType> => {
  const authState = await axiosInstance
    .post(
      "/auth/resetPassword",
      {
        email: email,
        newPassword: newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response, "forgot passwored success");
      const token = response.data.token;
      store.dispatch(setToken(token));

      return {
        success: true,
        message: [response.data.message],
      };
    })
    .catch(function (err: any) {
      const res = err.response;
      console.log(res);
      let errorMessages = [""];
      if (res.status === 400) {
        const backendErrors = res.data.details;
        errorMessages = backendErrors.map((err: any) => err.message);
      } else {
        const backendErrors = res.data;
        errorMessages = [backendErrors.message];
      }
      return {
        success: false,
        message: errorMessages,
      };
    });
  return authState;
};
