"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

type ImageUploaderProps = {
  bucket: string;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
};

export default function ImageUploader({
  bucket,
  value,
  onChange,
  multiple = false,
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);

  const images = Array.isArray(value) ? value : value ? [value] : [];

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.warning("Maximum image size is 5MB");
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.warning("Please upload an image.");
      return;
    }

    setUploading(true);

    try {
      const fileName = `${Date.now()}-${Math.random()}-${file.name}`;

      const { error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (error) throw error;

      const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);

      if (multiple) {
        onChange([...images, data.publicUrl]);
      } else {
        onChange(data.publicUrl);
      }

      toast.success("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    if (!multiple) {
      onChange("");
      return;
    }

    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <input
        type="file"
        accept="image/*"
        onChange={uploadImage}
        className="border rounded-md p-1 w-full"
      />

      {uploading && <p className="text-xs text-gray-500">Uploading...</p>}

      {images.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {images.map((url, index) => (
            <div key={url} className="relative group w-24 h-24">
              <Image
                src={url}
                alt="Preview"
                fill
                className="rounded border object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs hidden group-hover:flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
