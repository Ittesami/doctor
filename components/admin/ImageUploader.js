"use client";
import { useState } from "react";
import { Upload, Loader2 } from "lucide-react";

// Uploads a file directly from the browser to Cloudinary using a signature
// fetched from our admin-gated API route, then reports back the resulting
// secure_url via onUploaded.
export default function ImageUploader({ onUploaded, folder = "doctor" }) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    try {
      const sigRes = await fetch("/api/admin/cloudinary-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folder }),
      });
      const sigData = await sigRes.json();
      if (!sigRes.ok) throw new Error(sigData.error || "Failed to get upload signature.");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", sigData.apiKey);
      formData.append("timestamp", sigData.timestamp);
      formData.append("signature", sigData.signature);
      formData.append("folder", sigData.folder);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`,
        { method: "POST", body: formData }
      );
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error?.message || "Upload failed.");

      onUploaded(uploadData.secure_url);
    } catch (err) {
      setError(err.message || "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div>
      <label className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors">
        {isUploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Upload className="w-4 h-4" />
        )}
        {isUploading ? "Uploading..." : "Upload Image"}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </label>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
