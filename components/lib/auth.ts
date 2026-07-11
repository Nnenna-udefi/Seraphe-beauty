import { AuthResponse } from "../types/api";

const TOKEN_KEY = "seraphe_admin_token";
const ADMIN_KEY = "seraphe_admin_user";

export const authManager = {
  setSession: (authData: AuthResponse) => {
    localStorage.setItem(TOKEN_KEY, authData.accessToken);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(authData.admin));
  },

  clearSession: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
  },

  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  getAdminUser: () => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem(ADMIN_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: (): boolean => {
    return !!authManager.getToken();
  },
};
