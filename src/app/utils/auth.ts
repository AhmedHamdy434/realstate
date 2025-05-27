// src/utils/auth.ts
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("token");
};
