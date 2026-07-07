"use client";
import React, { useState } from "react";

export default function AdminCategories() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Categories</h1>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2.5 rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800 transition-colors"
        >
          {showForm ? "Cancel" : "Add New Category"}
        </button>
      </div>

      {showForm && (
        <form className="bg-white border rounded-lg p-6 max-w-md space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Category Name
            </label>
            <input
              type="text"
              className="border p-2.5 rounded text-sm bg-white"
              placeholder="e.g., Lip Care"
            />
          </div>
          <button
            type="button"
            className="bg-amber-500 text-black px-4 py-2 rounded text-xs font-bold uppercase tracking-wider"
          >
            Save Category
          </button>
        </form>
      )}

      <div className="bg-white border rounded-lg overflow-hidden text-sm max-w-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
              <th className="p-4">Name</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {["Skincare", "Hair Care", "Lip Care"].map((cat, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-4 font-medium">{cat}</td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-xs font-semibold px-2.5 py-1 text-slate-700 bg-slate-100 rounded hover:bg-slate-200">
                    Edit
                  </button>
                  <button className="text-xs font-semibold px-2.5 py-1 text-red-600 bg-red-50 rounded hover:bg-red-100">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
