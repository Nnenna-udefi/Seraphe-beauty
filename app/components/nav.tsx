"use client";
import Image from "next/image";
import logo from "@/app/images/desktop-logo.png";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../lib/constants";

export const Nav = () => {
  const [nav, showNav] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedButton = buttonRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNav = () => {
    showNav((prev) => !prev);
  };
  return (
    <nav className="bg-secondary text-secondaryText text-sm md:text-base p-3">
      <div className="py-2 px-10 flex justify-between items-center">
        <Image src={logo} alt="logo" width={190} height={60} />
        <div className="relative">
          {" "}
          <input
            type="text"
            placeholder="Search Seraphé"
            className="bg-white text-darkText p-2 placeholder:text-darkText"
          />
          <Search className="absolute right-2.5 top-[50%] translate-[-50%]" />
        </div>
      </div>
      <hr className="w-full border text-secondaryText" />
      <div className="py-4 px-10 ">
        <ul className="md:flex hidden justify-center gap-6 uppercase">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={item.id}>
                <li
                  className={`${isActive ? "text-yellowText" : ""} font-medium`}
                >
                  {item.text}
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          <Menu />
        </div>
      </div>

      {nav && (
        <div>
          {/* <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleNav}
          >
            <X />
          </div> */}

          <ul className="flex flex-col font-medium gap-6 uppercase">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link href={item.link} key={item.id}>
                  <li className={`${isActive ? "" : ""} `}>{item.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}

      {/* {nav && (
          <>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black cursor-pointer bg-opacity-10 backdrop-blur-sm z-10"
            />
            {/* Animated Mobile Nav */}
      {/* <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-screen pt-13 fixed inset-0 w-[80%] bg-white text-[#0e1726] z-20"
            > */}
      {/* <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleNav}
              >
                <X />
              </div>
              <> */}
    </nav>
  );
};
