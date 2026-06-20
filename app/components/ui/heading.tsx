import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      className={`font-cantataOne text-3xl md:text-5xl text-black font-normal ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}
