"use client";

import { AlertTriangle } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  isOpen,
  title = "Delete Item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  loading = false,
  onCancel,
  onConfirm,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center px-6 pt-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-7 w-7 text-red-600" />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-900">{title}</h2>

          <p className="mt-2 text-center text-sm leading-6 text-gray-500">
            {message}
          </p>
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t px-6 py-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
