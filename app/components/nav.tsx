"use client";
import Image from "next/image";
import logo from "@/app/images/logo-white.png";
import Link from "next/link";
import { Menu, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, serapheDatabase, shopItems } from "../lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import PredictiveSearch, { SearchItem } from "./search";

export const Nav = () => {
  const [nav, showNav] = useState(false);
  const pathname = usePathname();
  const [shop, showShop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobileMenu = () => {
    showNav(false);
    showShop(false);
  };

  const handleNav = () => {
    showNav((prev) => !prev);
    if (shop) showShop(false); // Reset shop sub-state if main nav toggles shut
  };

  const handleShopMenu = () => {
    showShop((prev) => !prev);
  };

  return (
    <nav className="bg-secondary text-secondaryText text-sm md:text-base p-3 relative">
      <div className="py-2 md:px-10 px-3 flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          width={190}
          height={0}
          className="w-40 md:w-47.5"
        />

        <div>
          <div
            onClick={() => setIsSearchOpen(true)}
            className="bg-white flex items-center gap-3 justify-between px-4 py-2 cursor-pointer w-full "
          >
            <span className="text-darkText hidden md:block text-sm md:text-base">
              Search Seraphé{" "}
            </span>
            <svg
              className="w-5 h-5 text-darkText"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <PredictiveSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          mockData={serapheDatabase as SearchItem[]}
        />
      </div>

      <hr className="w-full border text-secondaryText" />

      {/* Desktop Navigation Links Container */}
      <div className="py-4 px-3 md:px-10">
        <ul className="md:flex hidden justify-center gap-6 uppercase">
          <li>
            <button
              onClick={handleShopMenu}
              className={`${
                shop || pathname.startsWith("/shop")
                  ? "text-yellowText"
                  : "text-secondaryText"
              } font-medium uppercase tracking-wider bg-transparent border-none outline-none cursor-pointer transition-colors hover:text-yellowText`}
            >
              Shop Seraphé
            </button>
          </li>
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={item.id}>
                <li
                  className={`${isActive ? "text-yellowText" : ""} hover:text-yellowText font-medium`}
                >
                  {item.text}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Mobile Toggle Trigger Button */}
        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          <Menu />
        </div>
      </div>

      {/* Desktop Floating Shop Dropdown */}
      <AnimatePresence>
        {shop && !nav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 w-full bg-secondary z-40 border-b border-gray-800 hidden md:block"
          >
            <ul className="grid grid-cols-4 py-10 px-10 max-w-6xl mx-auto font-medium gap-6 uppercase">
              {shopItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link href={item.link} key={item.id}>
                    <li
                      className={`${isActive ? "text-yellowText" : ""} hover:text-yellowText transition-colors`}
                    >
                      {item.text}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unified Mobile Drawer Container */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden block overflow-hidden bg-secondary w-full z-40 border-t border-gray-800"
          >
            {/* If the sub-shop menu state is closed, print basic parent links */}
            {!shop ? (
              <motion.ul
                key="main-mobile-nav"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={closeMobileMenu}
                className="flex flex-col py-6 px-3 font-medium gap-6 uppercase"
              >
                <li>
                  <button
                    onClick={handleShopMenu}
                    className="flex justify-between items-center w-full text-left font-medium uppercase tracking-wider text-secondaryText"
                  >
                    <span>Shop Seraphé</span>
                    <span className="text-xs text-gray-400">→</span>
                  </button>
                </li>
                {navItems.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link href={item.link} key={item.id}>
                      <li className={`${isActive ? "text-yellowText" : ""}`}>
                        {item.text}
                      </li>
                    </Link>
                  );
                })}
              </motion.ul>
            ) : (
              /* If sub-shop menu state is active, render shop layers directly on top */
              <motion.div
                key="shop-mobile-nav"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="py-6 px-3"
              >
                {/* Back Button to leave shop items view */}
                <button
                  onClick={() => showShop(false)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold"
                >
                  <ArrowLeft size={14} /> Back to main menu
                </button>

                <h3 className="text-xs uppercase text-yellowText tracking-widest border-b border-gray-800 pb-2 mb-4 font-bold">
                  Shop Collections
                </h3>

                <ul className="grid grid-cols-1 gap-5 uppercase font-medium">
                  {shopItems.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                      <Link href={item.link} key={item.id}>
                        <li
                          className={`${isActive ? "text-yellowText" : "text-secondaryText"} active:text-yellowText`}
                        >
                          {item.text}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
