import React from "react";

interface Props {
  title: string;
  value: number;
}
const Card = ({ title, value }: Props) => {
  return (
    <div className="">
      <div className="bg-white border p-6 rounded-lg shadow-sm flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
            {title}
          </p>
          <h3 className="text-4xl font-serif font-bold mt-2">{value}</h3>
        </div>
        {/* <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            Live Feed
          </span> */}
      </div>
    </div>
  );
};

export default Card;
