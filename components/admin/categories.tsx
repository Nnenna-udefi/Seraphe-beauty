"use client";
import React, { useEffect, useState } from "react";
import { Category } from "../types/api";
import { api } from "../lib/api";

export default function AdminCategories() {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {
        const data = await api.adminShop.getCategories();
        if (isMounted) {
          setCategories(data);
        }
      } catch (error: unknown) {
        if (isMounted) {
          const errMsg =
            error instanceof Error ? error.message : "An error occurred";
          alert(`Failed to load categories: ${errMsg}`);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Use a zero-delay timeout to push the execution out of the synchronous mounting execution thread
    const timer = setTimeout(() => {
      fetchCategories();
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // 2. CREATE & UPDATE Handler
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    try {
      if (editId) {
        // Edit Mode: Update Existing Category
        const updatedCategory = await api.adminShop.updateCategory(editId, {
          name,
        });
        setCategories((prev) =>
          prev.map((cat) => (cat.id === editId ? updatedCategory : cat)),
        );
        alert("Category updated successfully!");
      } else {
        // Add Mode: Create Brand New Category
        const newCategory = await api.adminShop.createCategory({ name });
        setCategories((prev) => [...prev, newCategory]);
        alert("Category created successfully!");
      }
      resetForm();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(`Save operation failed: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  // 3. DELETE Handler
  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      await api.adminShop.deleteCategory(id);
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
      alert("Category deleted successfully.");

      // If we are currently edit the deleted category, clear the form panels
      if (editId === id) resetForm();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(`Deletion failed: ${error.message}`);
    }
  };

  // Helper to open edit interface panel
  const startEdit = (category: Category) => {
    setEditId(category.id);
    setName(category.name);
    setShowForm(true);
  };

  const resetForm = () => {
    setName("");
    setEditId(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Categories</h1>
        </div>
        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className="bg-black text-white px-5 py-2.5 rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800 transition-colors"
        >
          {showForm ? "Cancel" : "Add New Category"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSaveCategory}
          className="bg-white border rounded-lg p-6 max-w-md space-y-4"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">
            {editId ? "Modify Category" : "Create New Category"}
          </h3>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Category Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2.5 rounded text-sm bg-white focus:ring-2 focus:ring-primaryText focus:outline-none"
              placeholder="e.g., Lip Care"
              disabled={submitting}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-primaryText text-black px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-primaryBg transition disabled:opacity-50"
          >
            {submitting
              ? "Processing..."
              : editId
                ? "Update Category"
                : "Save Category"}
          </button>
        </form>
      )}

      {/* Categories Data Display Table */}
      <div className="bg-white border rounded-lg overflow-hidden text-sm max-w-xl shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-gray-500 font-medium">
            Fetching category index...
          </div>
        ) : categories.length === 0 ? (
          <div className="p-8 text-center text-gray-500 font-medium">
            No product categories registered yet.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
                <th className="p-4">Name</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{cat.name}</td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => startEdit(cat)}
                      className="text-xs font-semibold px-2.5 py-1 text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="text-xs font-semibold px-2.5 py-1 text-red-600 bg-red-50 rounded hover:bg-red-100 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
