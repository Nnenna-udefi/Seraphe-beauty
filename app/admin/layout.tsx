"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrDashboard } from "react-icons/gr";
import { BiCategory, BiShoppingBag } from "react-icons/bi";
import {
  FaBookOpen,
  FaLifeRing,
  FaRegCommentDots,
  FaShoppingBag,
  FaStickyNote,
  FaSuperpowers,
  FaTag,
  FaTripadvisor,
  FaUserFriends,
  FaWalking,
} from "react-icons/fa";
import { Toaster } from "sonner";
import { useAuth } from "@/components/context/authContext";

export const AdminNavItems = [
  { icon: GrDashboard, text: "Dashboard", link: "/admin" },
  { icon: FaBookOpen, text: "Blog", link: "/admin/blog" },
  { icon: BiCategory, text: "Categories", link: "/admin/categories" },
  { icon: BiShoppingBag, text: "Products", link: "/admin/products" },
  { icon: FaRegCommentDots, text: "Reviews", link: "/admin/reviews" },
  { icon: FaTripadvisor, text: "Beauty Tips", link: "/admin/beauty-tips" },
  { icon: FaLifeRing, text: "Lifestyle", link: "/admin/lifestyle" },
  { icon: FaTag, text: "Trends", link: "/admin/trends" },
  { icon: FaWalking, text: "Models", link: "/admin/models" },
  { icon: FaUserFriends, text: "Subscribers", link: "/admin/subscribers" },
  { icon: FaSuperpowers, text: "Team", link: "/admin/team" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen text-black ">
      {/* Side Navigation Bar */}
      {isAuthenticated && (
        <aside className="w-16 md:w-64 bg-gray-100 border-r border-darkText shrink-0">
          <nav className="flex flex-col gap-2 p-2 md:p-4">
            {AdminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.link;

              return (
                <Link
                  key={item.text}
                  href={item.link}
                  className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 rounded-lg px-2 md:px-4 py-3 transition-colors ${
                    isActive
                      ? "bg-secondary text-secondaryText font-semibold"
                      : "text-black hover:bg-darkText hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="text-xl shrink-0" />}

                  <span className="hidden md:inline text-sm">{item.text}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
      )}

      {/* Main Content Pane */}

      <main className="flex-1 p-8 md:p-12 overflow-y-auto max-h-screen">
        {children}
        <Toaster richColors position="top-right" />
      </main>
    </div>
  );
}
