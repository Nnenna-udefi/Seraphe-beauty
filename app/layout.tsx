import type { Metadata } from "next";
import { Figtree, Red_Hat_Display, Cantata_One } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const figTree = Figtree({
  variable: "--font-figTree",
  subsets: ["latin"],
});

const cantataOne = Cantata_One({
  variable: "--font-cantataOne",
  subsets: ["latin"],
  weight: ["400"],
});

const redHat = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Seraphé Beauty",
  description:
    "Our goal is to elevate and promote African beauty standards through Afro-inspired innovative beauty products, beauty technologies and beauty education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figTree.variable} ${cantataOne.variable} ${redHat.variable} bg-[#faf9f9] h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
