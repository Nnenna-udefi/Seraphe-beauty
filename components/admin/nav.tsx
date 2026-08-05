"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/authContext";
import { ArrowLeft, LogOut, ChevronDown, User } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/images/short-logo.png";

const AdminNav = () => {
  const { admin, logout } = useAuth();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    router.push("/signIn");
  };

  // Generate 1-2 letter uppercase initials
  const initials = admin?.name
    ? admin.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : null;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-xs"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>

        <div className="flex justify-center items-center gap-2">
          <div className="pb-3 ">
            <Image src={Logo} alt="logo" width={30} height={30} />
          </div>
          <div className="font-serif flex items-center justify-center gap-2 font-bold text-lg text-gray-900 tracking-tight">
            <span className="hidden sm:block">Seraphé </span>
            <span className="text-primaryBg  font-sans font-medium uppercase tracking-wider">
              Admin
            </span>
          </div>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2.5 p-1 rounded-full sm:rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all focus:outline-hidden"
            aria-expanded={dropdownOpen}
          >
            <div className="h-9 w-9 rounded-full bg-slate-900 text-white font-semibold flex items-center justify-center text-xs overflow-hidden shadow-xs ring-2 ring-gray-100">
              {admin?.avatar ? (
                <img
                  src={admin.avatar}
                  alt={admin?.name || "Admin"}
                  className="h-full w-full object-cover"
                />
              ) : initials ? (
                <span>{initials}</span>
              ) : (
                <User size={18} className="text-gray-300" />
              )}
            </div>

            {/* Admin Name & Role label (Desktop) */}
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs uppercase font-semibold text-gray-900 leading-tight">
                {admin?.name || "Admin Account"}
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                {admin?.email || "Administrator"}
              </span>
            </div>

            <ChevronDown
              size={14}
              className={`text-gray-400 transition-transform duration-200 hidden sm:block ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-gray-100 shadow-xl py-1 z-50 animate-in fade-in-50 zoom-in-95 duration-100">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                <p className="text-xs font-semibold text-gray-900 truncate uppercase">
                  {admin?.name || "Admin"}
                </p>
                <p className="text-[11px] text-gray-500 truncate mt-0.5">
                  {admin?.email || "admin@seraphe.com"}
                </p>
              </div>

              <div className="p-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <LogOut size={15} />
                  <span>Log out session</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
