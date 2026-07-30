"use client";
import Image from "next/image";
import logo from "@/components/images/whitebg.png";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { shopItems, useNavItems } from "./lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import PredictiveSearch from "./search";
import { useSite } from "./helper/siteContext";

export const Nav = () => {
  const navItems = useNavItems();
  const [nav, showNav] = useState(false);
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const { products, categories, tips, trends } = useSite();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) return null;

  const closeMobileMenu = () => {
    showNav(false);
    setActiveSubmenu(null);
  };

  const handleNav = () => {
    showNav((prev) => !prev);
  };

  const selectedMenu = navItems.find((item) => item.text === activeSubmenu);

  return (
    <nav className="bg-secondary sticky text-secondaryText text-sm lg:text-base p-3 ">
      <div className="py-2 md:px-10 px-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={0}
            className="w-40 md:w-47.5"
          />
        </Link>
        <div>
          <div
            onClick={() => setIsSearchOpen(true)}
            className="bg-secondaryText flex items-center gap-3 justify-between px-4 py-2 cursor-pointer w-full "
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
          products={products}
          blogs={tips}
          trends={trends}
          collections={categories}
        />
      </div>

      <hr className="w-full border text-secondaryText" />

      {/* Desktop Navigation Links Container */}
      <div
        className="relative py-4 px-3 md:px-10"
        onMouseLeave={() =>
          setDesktopMenu(null)
        } /* Clears state when leaving the entire navbar area */
      >
        <ul className="hidden lg:flex justify-center w-full gap-8 uppercase">
          {navItems.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setDesktopMenu(item.text)}
              /* Removed onMouseLeave here so moving down to the dropdown won't close it */
            >
              <Link href={item.link}>
                <span className="hover:text-yellowText cursor-pointer py-4 inline-block">
                  {item.text}
                </span>
              </Link>

              {desktopMenu === item.text && item.children && (
                <div className="absolute left-0 right-0 top-full w-full bg-secondary border-t border-gray-700 shadow-xl z-50">
                  <div className="max-w-7xl  text-sm gap-4 flex flex-col px-10 py-8">
                    {item.children.map((child) => (
                      <Link
                        key={child.link}
                        href={child.link}
                        className="hover:text-yellowText text-sm"
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Trigger Button */}
        <div className="block lg:hidden cursor-pointer" onClick={handleNav}>
          <Menu />
        </div>
      </div>

      {/* Desktop Floating Shop Dropdown */}
      <AnimatePresence>
        {nav &&
          (!activeSubmenu ? (
            <motion.ul
              key="main"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="lg:hidden flex flex-col py-6 px-4 gap-5 uppercase"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.children ? (
                    <button
                      onClick={() => setActiveSubmenu(item.text)}
                      className="flex justify-between uppercase w-full hover:text-yellowText"
                    >
                      <span>{item.text}</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <Link href={item.link} onClick={closeMobileMenu}>
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              key="submenu"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="py-6 px-4"
            >
              <button
                onClick={() => setActiveSubmenu(null)}
                className="mb-6 text-yellowText"
              >
                ← Back
              </button>

              <ul className="space-y-4 uppercase">
                {selectedMenu?.children?.map((child) => (
                  <li key={child.link}>
                    <Link href={child.link} onClick={closeMobileMenu}>
                      {child.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        {/* {shop && !nav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 w-full bg-secondary z-40 border-b border-gray-800 hidden lg:block"
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
        )} */}
      </AnimatePresence>

      {/* Unified Mobile Drawer Container */}
      {/* <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden block overflow-hidden bg-secondary w-full z-40 border-t border-gray-800"
          >
            <motion.ul
              key="main-mobile-nav"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={closeMobileMenu}
              className="flex flex-col py-6 px-3 font-medium gap-6 uppercase" */}
      {/* > */}
      {/* <li onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShopMenu();
                    }}
                    className="flex justify-between items-center w-full text-left font-medium uppercase tracking-wider text-secondaryText"
                  >
                    <span>Shop Seraphé</span>
                    <span className="text-xs text-gray-400">→</span>
                  </button>
                </li> */}
      {/* {navItems.map((item) => {
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
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
};
