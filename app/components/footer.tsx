"use client";
import Image from "next/image";
import logo from "@/app/images/desktop-logo.png";
import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { footerList, skincareList } from "../lib/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="md:px-12 px-6 md:text-lg text-base text-primaryText">
      <hr className="border w-full text-darkText" />
      <div className="flex flex-col justify-between  md:flex-row gap-12  py-6 md:py-12">
        <div className="w-full">
          <Image src={logo} alt="logo" width={190} height={60} />

          <div className="hidden lg:block">
            <div className="pt-10 pb-6">
              <p>Stay up to date with our latest stories</p>
              <form className="flex py-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="py-2 px-3 bg-gray-200 text-base text-[#525252] placeholder:text-[#525252]"
                />
                <button type="submit" className="text-white p-2 bg-primaryBg">
                  Sign Up
                </button>
              </form>
            </div>

            <div className="flex gap-3 text-sm pt-4 pb-10">
              <BsYoutube />
              <FaFacebook />
              <LiaLinkedin />
              <BsTwitterX />
              <BsInstagram />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-6 px-2">
          <ul className="flex flex-col gap-2">
            {footerList.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link href={item.link} key={item.id}>
                  <li className={`${isActive ? "" : ""} font-medium`}>
                    {item.text}
                  </li>
                </Link>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-2">
            {skincareList.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link href={item.link} key={item.id}>
                  <li className={`${isActive ? "" : ""}`}>{item.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="block lg:hidden">
          <div className="pt-10 pb-6">
            <p>Stay up to date with our latest stories</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 text-darkText placeholder:text-darkText"
              />
              <button type="submit" className="bg-primaryBg text-white p-2">
                Sign Up
              </button>
            </form>
          </div>

          <div className="flex gap-3  pt-4 pb-10">
            <BsYoutube fontSize={24} />
            <FaFacebook fontSize={24} />
            <LiaLinkedin fontSize={24} />
            <BsTwitterX fontSize={24} />
            <BsInstagram fontSize={24} />
          </div>
        </div>
      </div>
      <div className="text-darkText">
        <hr className="border w-full" />
        <div className="flex justify-between py-3 text-sm">
          {" "}
          <p>Copyright 2026 . SeraphéBeauty</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
