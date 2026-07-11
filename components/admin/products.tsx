// components/admin/AdminProducts.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Category, Product } from "../types/api";
import { api } from "../lib/api";

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);

  // Initialize to true to avoid synchronous state warnings inside the mounting phase
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form Field States (Matching ProductPayload structure exactly)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number | undefined>(
    undefined,
  );
  const [sku, setSku] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // 1. READ: Fetch products and category listings together cleanly on mount
  useEffect(() => {
    let isMounted = true;

    const initData = async () => {
      try {
        const [prodData, catData] = await Promise.all([
          api.adminShop.getProducts(),
          api.adminShop.getCategories(),
        ]);

        if (isMounted) {
          setProducts(prodData);
          setCategories(catData);
        }
      } catch (error: unknown) {
        if (isMounted) {
          const errMsg =
            error instanceof Error ? error.message : "Data fetch error";
          alert(`Failed to load store inventory: ${errMsg}`);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Pushes execution out of synchronous mounting thread block
    const timer = setTimeout(() => {
      initData();
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Auto-generate helper to build url slugs as you type out the product name
  const handleNameChange = (val: string) => {
    setName(val);
    if (!editingId) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
      );
    }
  };

  // 2. CREATE & UPDATE Handler
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return alert("Please select a target category.");

    setSubmitting(true);
    const payload = {
      name,
      slug,
      price: Number(price),
      category,
      shortDescription,
      description,
      images,
      stock: Number(stock),
      sku: sku || undefined,
      discountPrice: discountPrice ? Number(discountPrice) : undefined,
      isFeatured,
      isActive,
    };

    try {
      if (editingId) {
        const updated = await api.adminShop.updateProduct(editingId, payload);
        setProducts((prev) =>
          prev.map((p) => (p.id === editingId ? updated : p)),
        );
        alert("Product record updated successfully!");
      } else {
        const created = await api.adminShop.createProduct(payload);
        setProducts((prev) => [...prev, created]);
        alert("New product cataloged successfully!");
      }
      resetForm();
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : "Save failure";
      alert(`Operation failed: ${errMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  // 3. DELETE Handler
  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this product?"))
      return;

    try {
      await api.adminShop.deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert("Product dropped from inventory.");
      if (editingId === id) resetForm();
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Deletion failure";
      alert(`Could not drop item: ${errMsg}`);
    }
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setSlug(product.slug);
    setPrice(product.price);
    setCategory(product.category);
    setShortDescription(product.shortDescription);
    setDescription(product.description);
    setImages(product.images);
    setStock(product.stock);
    setDiscountPrice(product.discountPrice);
    setSku(product.sku || "");
    setIsFeatured(!!product.isFeatured);
    setIsActive(!!product.isActive);
    setShowForm(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setSlug("");
    setPrice(0);
    setCategory("");
    setShortDescription("");
    setDescription("");
    setImages("");
    setStock(0);
    setDiscountPrice(undefined);
    setSku("");
    setIsFeatured(false);
    setIsActive(true);
    setShowForm(false);
  };

  // Quick helper to match and render raw Category ID values into plain text labels
  const getCategoryName = (catId: string) => {
    const found = categories.find((c) => c.id === catId);
    return found ? found.name : "Unassigned";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Products</h1>
        </div>
        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className="bg-black text-white px-5 py-2.5 rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800 transition-colors"
        >
          {showForm ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {/* Structural Form Overlay / Display Panel */}
      {showForm && (
        <form
          onSubmit={handleSaveProduct}
          className="bg-white border rounded-lg p-6 space-y-4 shadow-sm max-w-2xl"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">
            {editingId ? "Modify Product Specifics" : "Register Catalog Item"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Product Title
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="border p-2 rounded text-sm bg-white"
                placeholder="e.g., Hydrating Serum"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                URL Slug
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="border p-2 rounded text-sm bg-gray-50"
                placeholder="hydrating-serum"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Category Classification
              </label>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded text-sm bg-white"
              >
                <option value="">-- Choose Category --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                SKU Code
              </label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="border p-2 rounded text-sm bg-white"
                placeholder="SR-HD-01"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                required
                value={price || ""}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border p-2 rounded text-sm bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Discount Break Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={discountPrice || ""}
                onChange={(e) =>
                  setDiscountPrice(
                    e.target.value ? Number(e.target.value) : undefined,
                  )
                }
                className="border p-2 rounded text-sm bg-white"
                placeholder="Optional"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Stock Count
              </label>
              <input
                type="number"
                required
                value={stock || ""}
                onChange={(e) => setStock(Number(e.target.value))}
                className="border p-2 rounded text-sm bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-semibold text-gray-500">
                Image Asset Endpoint URL
              </label>
              <input
                type="text"
                required
                value={images}
                onChange={(e) => setImages(e.target.value)}
                className="border p-2 rounded text-sm bg-white"
                placeholder="https://cdn.com/product.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Short Summary Snippet
            </label>
            <input
              type="text"
              required
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full border p-2 rounded text-sm bg-white"
              placeholder="A brief one-sentence pitch line..."
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold text-gray-500">
              Full Description Markdown
            </label>
            <textarea
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded text-sm bg-white"
              placeholder="Deep product copy properties..."
            />
          </div>

          <div className="flex gap-6 items-center pt-2">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="rounded border-gray-300 accent-amber-500"
              />
              Feature item on homepage
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="rounded border-gray-300 accent-amber-500"
              />
              Item is visible and active
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-amber-500 text-black px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition disabled:opacity-50"
          >
            {submitting
              ? "Processing..."
              : editingId
                ? "Update Variant Data"
                : "Catalog Product"}
          </button>
        </form>
      )}

      {/* Main Catalog Rendering Table */}
      <div className="bg-white border rounded-lg overflow-hidden text-sm shadow-sm w-full">
        {loading ? (
          <div className="p-8 text-center text-gray-500 font-medium">
            Reading product catalog indices...
          </div>
        ) : products.length === 0 ? (
          <div className="p-8 text-center text-gray-500 font-medium">
            No items matched inside your server data directory.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
                  <th className="p-4">Item Details</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.map((prod) => (
                  <tr
                    key={prod.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 flex items-center gap-3">
                      {prod.images && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={prod.images}
                          alt={prod.name}
                          className="w-10 h-10 object-cover rounded bg-gray-100 border"
                        />
                      )}
                      <div>
                        <div className="font-medium text-gray-800 flex items-center gap-1.5">
                          {prod.name}
                          {prod.isFeatured && (
                            <span className="text-[9px] bg-purple-100 text-purple-700 font-bold px-1 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          {prod.sku || "No SKU"}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-600">
                      {getCategoryName(prod.category)}
                    </td>
                    <td className="p-4 font-medium text-gray-800">
                      {prod.discountPrice ? (
                        <span>
                          <span className="text-red-600">
                            ${prod.discountPrice}
                          </span>
                          <span className="text-xs text-gray-400 line-through ml-1.5">
                            ${prod.price}
                          </span>
                        </span>
                      ) : (
                        `$${prod.price}`
                      )}
                    </td>
                    <td className="p-4">
                      {prod.stock <= 0 ? (
                        <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded font-medium">
                          Out of stock
                        </span>
                      ) : (
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium">
                          {prod.stock} units
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => startEdit(prod)}
                        className="text-xs font-semibold px-2.5 py-1 text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="text-xs font-semibold px-2.5 py-1 text-red-600 bg-red-50 rounded hover:bg-red-100 transition"
                      >
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
    </div>
  );
}
