import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      className={`font-cantataOne text-2xl md:text-5xl text-black font-normal ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H3({ children, className, ...props }: H1Props) {
  return (
    <h3
      className={`font-cantataOne text-lg md:text-xl text-black font-normal ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
