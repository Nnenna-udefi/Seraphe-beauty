"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authManager } from "@/components/lib/auth";
import { AuthResponse } from "@/components/types/api";

// Infer or import your actual Admin type
export type AdminUser = {
  id?: string;
  name?: string;
  email?: string;
  [key: string]: any;
};

type AuthContextType = {
  isAuthenticated: boolean;
  admin: AdminUser | null;
  login: (auth: AuthResponse) => void;
  logout: () => void;
  token: string | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Hydrate state from storage on mount
    const initialToken = authManager.getToken();
    const initialAdmin = authManager.getAdminUser();
    const authed = authManager.isAuthenticated();

    setToken(initialToken);
    setAdmin(initialAdmin);
    setIsAuthenticated(authed);
    setLoading(false);
  }, []);

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
        loading,
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
