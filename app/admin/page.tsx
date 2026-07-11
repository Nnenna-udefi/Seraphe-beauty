"use client";
import AdminDashboard from "@/components/admin";
import { authManager } from "@/components/lib/auth";
import React, { useEffect, useState } from "react";
import AdminSignIn from "./auth/signIn";
import AdminSignUp from "./auth/signUp";
import { Loader } from "lucide-react";

const AdminPage = () => {
  const [view, setView] = useState<"signin" | "signup" | "dashboard">(() => {
    if (typeof window !== "undefined") {
      return authManager.isAuthenticated() ? "dashboard" : "signin";
    }
    return "signin"; // Fallback for the initial server render pass
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(false);
  }, []);
  const handleLogout = () => {
    authManager.clearSession();
    setView("signin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  }
  // Auth Guard Gatekeeper Routing
  if (view === "signin") {
    return (
      <AdminSignIn
        onAuthSuccess={() => setView("dashboard")}
        onSwitchToSignUp={() => setView("signup")}
      />
    );
  }

  if (view === "signup") {
    return (
      <AdminSignUp
        onAuthSuccess={() => setView("dashboard")}
        onSwitchToSignIn={() => setView("signin")}
      />
    );
  }

  // --- PROTECTED ADMIN DASHBOARD LIVE VIEW ---
  const currentAdmin = authManager.getAdminUser();
  return (
    <div className="min-h-screen  p-6">
      <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Seraphé Workspace Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back, {currentAdmin?.name || "Admin"}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-100 transition"
        >
          Logout
        </button>
      </header>
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
