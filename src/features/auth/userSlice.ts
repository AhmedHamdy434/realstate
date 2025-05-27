import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface User {
  userName: string;
  email: string;

  phone: number;
  // password: string;

  role: "buyer" | "seller" | "agent" | "admin";

  // image: string;

  active: boolean;

  // provider: string;
  // passwordChangedAt: Date;
  // passwordResetCode: String;
  // passwordResetExpires: Date;
  // passwordResetVerified: Boolean;
  // token: string | null;
  // refreshToken: string | null;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  // status: "idle" | "loading" | "succeeded" | "failed";
  // error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  // status: "idle",
  // error: null,
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setUser(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});
export default authSlice.reducer;
export const { setUser, logout, setToken } = authSlice.actions;
