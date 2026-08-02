"use client";
import Image from "next/image";
import logo from "@/components/images/redbg.png";
import { BsInstagram } from "react-icons/bs";
import { FaEnvelope, FaFacebook, FaPhone, FaTiktok } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { footerList, skincareList } from "./lib/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { api } from "./lib/api";
import { useState } from "react";
import { Check } from "lucide-react";
import { H3 } from "./ui/heading";

export const Footer = () => {
  const pathname = usePathname();

  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) return null;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    try {
      setLoading(true);

      await api.publicShop.createSubscriber({
        name,
        email,
      });

      setName("");
      setEmail("");
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:px-12 px-6 md:text-lg text-base text-primaryBg">
      <hr className="border w-full text-darkText" />
      <div className="flex flex-col justify-between  lg:flex-row gap-4  py-6 md:py-12">
        <div className="lg:w-2xl w-full">
          <Image src={logo} alt="logo" width={100} height={0} />

          <div className="hidden lg:block">
            <div className="pt-10 pb-6">
              <p className="pb-2">Stay up to date with our latest stories</p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="flex-1 border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="md:w-32 bg-primaryBg text-white px-6 py-3.5 text-sm uppercase tracking-wider font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Joining..." : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-6 px-2">
          <ul className="flex flex-col gap-2">
            {footerList.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link href={item.link} key={item.id}>
                  <li className={`${isActive ? "font-n" : ""} font-medium`}>
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
                  <li
                    className={`${isActive ? "font-normal" : ""} font-medium`}
                  >
                    {item.text}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div>
              <h3 className="uppercase tracking-tighter">
                Contact Information
              </h3>
              <p className="pt-4 flex gap-1 items-center text-base">
                <FaPhone />
                <span>+234-705-968-6654</span>
              </p>
              <p className="flex gap-1 items-center text-base">
                <FaEnvelope />
                <span>seraphebeauty.ng@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-3 text-sm pt-6">
              <FaTiktok fontSize={20} />
              <LiaLinkedin fontSize={20} />
              <FaFacebook fontSize={20} />
              <Link href="https://instagram.com/seraphe_beauty" target="_blank">
                <BsInstagram fontSize={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="pt-10 pb-6">
            <p>Stay up to date with our latest stories</p>
            <form onSubmit={handleSubmit} className="mt-8 ">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="flex-1 lg:w-[50%] w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 lg:w-[50%] w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="md:w-32 bg-primaryBg text-white px-6 py-3.5 text-sm uppercase tracking-wider font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Joining..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>

          <div className="py-4">
            <div>
              <h3 className="uppercase tracking-tighter font-medium">
                Contact Information
              </h3>
              <p className="pt-4 flex gap-1 items-center text-base">
                <FaPhone />
                <span>+234-705-968-6654</span>
              </p>
              <p className="flex gap-1 items-center text-base">
                <FaEnvelope />
                <span>seraphebeauty.ng@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-3 text-sm pt-6">
              <FaTiktok fontSize={20} />
              <LiaLinkedin fontSize={20} />
              <FaFacebook fontSize={20} />
              <Link href="https://instagram.com/seraphe_beauty" target="_blank">
                <BsInstagram fontSize={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-darkText">
        <hr className="border w-full" />
        <div className="flex md:flex-row flex-col-reverse justify-between py-3 text-sm">
          {" "}
          <p className="text-center md:text-left">
            Copyright&#169;2026 . SeraphéBeauty
          </p>
          <div className="flex gap-4 justify-between py-2">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative w-full max-w-md bg-white px-8 py-12 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                <Check size={40} strokeWidth={3} className="text-white" />
              </div>
            </div>

            <p className="uppercase tracking-[0.25em] text-yellowText text-xs mb-3">
              Welcome to Seraphé
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-black">
              You&apos;re officially subscribed!
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
              Thank you for joining our community. We&apos;ll keep you updated
              with the latest beauty stories, trends and insights.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-8 bg-primaryBg px-8 py-3 text-sm uppercase tracking-wider text-white transition hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
