import React, { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
}
export default function Card({ title, value, icon }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>

      {/* 3. Render the icon if present */}
      {icon && <div className="p-2.5 bg-gray-50 rounded-lg">{icon}</div>}
    </div>
  );
}
