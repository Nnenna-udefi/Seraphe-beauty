"use client";
import AdminDashboard from "@/components/admin";
import { authManager } from "@/components/lib/auth";
import React, { useState } from "react";
import AdminSignIn from "./auth/signIn";
import AdminSignUp from "./auth/signUp";
import { Loader } from "lucide-react";

const AdminPage = () => {
  const [view, setView] = useState<"signin" | "signup" | "dashboard">(() => {
    if (typeof window !== "undefined") {
      return authManager.isAuthenticated() ? "dashboard" : "signin";
    }
    return "signin";
  });
  const loading = false;

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

  const currentAdmin = authManager.getAdminUser();

  return (
    <div className="min-h-screen  px-6">
      <header className="md:flex block justify-between items-center bg-white p-4 shadow-sm mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Seraphé Workspace Dashboard
          </h1>
          <p className="py-2 md:py-0 text-sm text-gray-500">
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
