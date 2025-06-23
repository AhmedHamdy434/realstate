/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from "../../../app/store";
import { axiosInstance } from "../../../axios/config";
import type { AuthResponseType } from "../types/authTypes";
import { setToken } from "../userSlice";

// validation email or phone number
export const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
export const isValidPhone = (value: string): boolean => {
  const phoneRegex = /^\+?[0-9]{10,14}$/;
  return phoneRegex.test(value);
};

//   Register Function
export const registerAction = async (
  email: string,
  phone: string,
  name: string,
  password: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/Signup", {
      userName: name,
      email,
      password,
      phone,
    });
    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// Login Function

export const loginAction = async (
  email: string,
  phone: string,
  password: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/Login", {
      email,
      phone,
      password,
    });

    const token = response.data.token;
    store.dispatch(setToken(token));

    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// verify email

export const verifyEmailAction = async (
  code: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/verifyResetCode", {
      resetCode: code,
    });
    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// verify phone
export const verifyPhoneAction = async (
  otpcode: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/verifyotpcode", {
      otpcode,
    });
    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// forgot password

export const forgotPasswordAction = async (
  email: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/forgotpassword", {
      email,
    });
    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// set new password

export const newPasswordAction = async (
  email: string,
  newPassword: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.put("/auth/resetPassword", {
      email: email,
      NewPassword: newPassword,
    });
    const token = response.data.token;
    store.dispatch(setToken(token));
    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// google

export const googleAction = async (): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.get("/auth/google");

    const token = response.data.token;
    store.dispatch(setToken(token));

    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};

// activate account
export const getNewTokenAction = async (
  activationToken: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.get(
      `/auth/activate/${activationToken}`
    );

    const token = response.data.token;
    store.dispatch(setToken(token));

    return {
      success: true,
      message: [response.data.message],
    };
  } catch (err: any) {
    return err;
  }
};
