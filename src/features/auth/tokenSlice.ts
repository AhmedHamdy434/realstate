import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
}
interface AuthStatePayload {
  token: string;
  refreshToken: string;
}
const initialState: AuthState = {
  token: null,
  refreshToken: null,
};
const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthStatePayload>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    clearToken: (state) => {
      state.token = null;
      state.refreshToken = null;
    },
  },
});
export default tokenSlice.reducer;
export const { setToken, clearToken } = tokenSlice.actions;
