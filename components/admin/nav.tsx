import React, { useState } from "react";
import { authManager } from "../lib/auth";
import AdminSignIn from "@/app/admin/auth/signIn";
import AdminSignUp from "@/app/admin/auth/signUp";
import Link from "next/link";
import { ArrowLeft, LogOut } from "lucide-react";

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

  const initials =
    currentAdmin?.name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "A";

  return (
    <header className="sticky top-0 z-20 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50 transition"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <h1 className="font-semibold text-base md:text-xl text-gray-800 text-center">
          Seraphé Admin
        </h1>

        <div className="flex items-center gap-3">
          <div className="group relative">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primaryBg text-white font-semibold">
              {initials}
            </div>

            <div className="absolute right-0 mt-2 w-max rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
              {currentAdmin?.name}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-md flex gap-2 bg-red-50 p-2 text-red-600 hover:bg-red-100 transition"
            title="Logout"
          >
            <LogOut size={18} />
            <span className="hidden md:block text-black">Log Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
