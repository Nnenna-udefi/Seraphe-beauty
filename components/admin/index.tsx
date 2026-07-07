"use client";
import React from "react";

export default function AdminDashboard() {
  // Mock Month-by-Month Graph Frequency Data
  const chartData = [
    { month: "Jan", count: 4 },
    { month: "Feb", count: 7 },
    { month: "Mar", count: 5 },
    { month: "Apr", count: 12 },
    { month: "May", count: 9 },
    { month: "Jun", count: 15 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border p-6 rounded-lg shadow-sm flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
              Total Blogs
            </p>
            <h3 className="text-4xl font-serif font-bold mt-2">24</h3>
          </div>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            Live Feed
          </span>
        </div>
        <div className="bg-white border p-6 rounded-lg shadow-sm flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
              Active Categories
            </p>
            <h3 className="text-4xl font-serif font-bold mt-2">9</h3>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
            Store Taxonomy
          </span>
        </div>
      </div>

      {/* Upload Frequency Monthly Chart */}
      <div className="bg-white border p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-6">
          Blog Upload Volume (Per Month)
        </h3>
        <div className="flex items-end gap-4 h-48 pt-4 border-b border-l px-4 border-gray-200">
          {chartData.map((data) => (
            <div
              key={data.month}
              className="flex-1 flex flex-col items-center gap-2 group h-full justify-end"
            >
              <div
                style={{ height: `${(data.count / 15) * 100}%` }}
                className="w-full bg-slate-800 group-hover:bg-amber-500 transition-colors rounded-t relative"
              >
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data.count}
                </span>
              </div>
              <span className="text-xs text-gray-500 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 5 Latest Posts Table */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
            Latest Published Stories
          </h3>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-500 text-xs font-bold uppercase">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Author</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[1, 2, 3, 4, 5].map((idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">
                  Makeup Brushes Are Ruining Your Skin ({idx})
                </td>
                <td className="p-4 text-amber-600 font-medium">Beauty Tips</td>
                <td className="p-4 text-gray-500">Sophia Panych</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
