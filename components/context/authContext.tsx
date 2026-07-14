"use client";

import { createContext, useContext, useState } from "react";

import { authManager } from "@/components/lib/auth";
import { AuthResponse } from "@/components/types/api";

type AuthContextType = {
  isAuthenticated: boolean;
  admin: ReturnType<typeof authManager.getAdminUser>;
  login: (auth: AuthResponse) => void;
  logout: () => void;
  token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    authManager.isAuthenticated(),
  );
  const [token, setToken] = useState(() => authManager.getToken());

  const [admin, setAdmin] = useState(() => authManager.getAdminUser());

  const login = (auth: AuthResponse) => {
    authManager.setSession(auth);

    setToken(auth.accessToken);
    setAdmin(auth.admin);
    setIsAuthenticated(true);
  };

  const logout = () => {
    authManager.clearSession();

    setToken(null);
    setAdmin(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        admin,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
