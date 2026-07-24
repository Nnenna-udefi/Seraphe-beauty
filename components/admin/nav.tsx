import React, { useState } from "react";
import { authManager } from "../lib/auth";
import AdminSignIn from "@/app/admin/auth/signIn";
import AdminSignUp from "@/app/admin/auth/signUp";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

const AdminNav = () => {
  const [view, setView] = useState<"signin" | "signup" | "dashboard">(() => {
    if (typeof window !== "undefined") {
      return authManager.isAuthenticated() ? "dashboard" : "signin";
    }
    return "signin";
  });
  const handleLogout = () => {
    authManager.clearSession();
    setView("signin");
  };

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
    <div>
      <header className="md:flex block justify-between items-center border-b p-2 shadow-sm mb-6">
        <Link href="/" className="border p-2">
          <ArrowBigRight /> <span>Back to Home</span>
        </Link>
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
    </div>
  );
};

export default AdminNav;
