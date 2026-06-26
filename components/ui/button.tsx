import Link from "next/link";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  //   link?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    // <Link href={link}>
    <button
      type="submit"
      className={` text-white p-2 bg-primaryBg ${className}`}
      {...props}
    >
      {children}
    </button>
    // </Link>
  );
}
