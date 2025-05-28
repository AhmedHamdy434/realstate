/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from "../../../app/store";
import { axiosInstance } from "../../../axios/config";
import type { AuthResponseType } from "../types/authTypes";
import { setToken } from "../userSlice";

//   Register Function
export const registerAction = async (
  email: string,
  name: string,
  password: string,
  phone = "20120713673"
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
  password: string
): Promise<AuthResponseType> => {
  try {
    const response = await axiosInstance.post("/auth/Login", {
      email,
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
