"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrDashboard } from "react-icons/gr";
import { BiCategory, BiShoppingBag } from "react-icons/bi";
import { FaBookOpen, FaRegCommentDots } from "react-icons/fa";

export const AdminNavItems = [
  { icon: GrDashboard, text: "Dashboard", link: "/admin" },
  { icon: FaBookOpen, text: "Blog", link: "/admin/blog" },
  { icon: BiCategory, text: "Categories", link: "/admin/categories" },
  { icon: BiShoppingBag, text: "Products", link: "/admin/products" },
  { icon: FaRegCommentDots, text: "Reviews", link: "/admin/reviews" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen text-black ">
      {/* Side Navigation Bar */}
      <aside className="md:w-64 w-12 bg-gray-100 flex flex-col shrink-0 border-r border-darkText">
        <nav className="flex-1 p-4 space-y-1.5">
          {AdminNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.text}
                href={item.link}
                className={`flex items-center gap-3 px-2 md:px-4 py-3 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-secondaryText font-semibold"
                    : "text-primaryText hover:bg-darkText hover:text-white"
                }`}
              >
                {Icon && <Icon className="text-base shrink-0" />}
                <span className="hidden md:block">{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto max-h-screen">
        {children}
      </main>
    </div>
  );
}
