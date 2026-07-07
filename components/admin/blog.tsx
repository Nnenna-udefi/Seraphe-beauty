"use client";
import React, { useState } from "react";

export default function AdminBlog() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Articles Catalog</h1>
          <p className="text-sm text-gray-500">Manage publication updates.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-black text-white px-5 py-2.5 rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800 transition-colors"
        >
          {showAddForm ? "View Feed List" : "Add New Blog"}
        </button>
      </div>

      {showAddForm ? (
        /* CREATE BLOG FORM UI */
        <form className="bg-white border rounded-lg p-6 max-w-3xl space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Article Title
            </label>
            <input
              type="text"
              className="border p-2.5 rounded text-sm bg-white"
              placeholder="Enter headline text"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="border p-2 text-sm rounded bg-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:bg-amber-100 file:text-amber-800 cursor-pointer"
            />
          </div>
          <button
            type="button"
            className="bg-amber-500 text-black px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
          >
            Publish Post
          </button>
        </form>
      ) : (
        /* ARTICLES FEED MANAGER TABLE */
        <div className="bg-white border rounded-lg overflow-hidden text-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
                <th className="p-4">Post Title</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                "Top 3 Regina Daniels Beauty Secrets",
                "Clinical Serum Innovations 2026",
              ].map((title, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{title}</td>
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
      )}
    </div>
  );
}
