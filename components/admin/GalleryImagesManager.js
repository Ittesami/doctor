"use client";
import { useState, useEffect, useCallback } from "react";
import { Loader2, Image as ImageIcon, Plus, Pencil, Trash2, X } from "lucide-react";

const EMPTY_FORM = { src: "", alt: "", caption: "" };

export default function GalleryImagesManager() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/gallery/images");
      const data = await res.json();
      if (res.ok) setImages(data.images);
    } catch {
      console.error("Failed to fetch gallery images");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setError("");
    setEditing("new");
  };

  const openEdit = (img) => {
    setForm({ src: img.src, alt: img.alt, caption: img.caption || "" });
    setError("");
    setEditing(img);
  };

  const closeForm = () => {
    setEditing(null);
    setError("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.src.trim() || !form.alt.trim()) {
      setError("Image URL and alt text are required.");
      return;
    }
    setIsSaving(true);
    setError("");
    try {
      const isNew = editing === "new";
      const url = isNew ? "/api/gallery/images" : `/api/gallery/images/${editing._id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save image.");
        return;
      }
      closeForm();
      fetchImages();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this photo? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/gallery/images/${id}`, { method: "DELETE" });
      if (res.ok) setImages((prev) => prev.filter((i) => i._id !== id));
    } catch {
      console.error("Failed to delete image");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {images.length} photo{images.length !== 1 ? "s" : ""}
        </p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Photo
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      )}

      {!isLoading && images.length === 0 && (
        <div className="text-center py-20">
          <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No photos yet</p>
        </div>
      )}

      {!isLoading && images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-2.5">
                <p className="text-xs text-gray-600 line-clamp-2">{img.alt}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => openEdit(img)}
                    className="flex-1 flex items-center justify-center gap-1 text-xs text-blue-600 hover:text-blue-700 px-2 py-1.5 border border-blue-200 rounded hover:bg-blue-50 transition-colors font-medium"
                  >
                    <Pencil className="w-3 h-3" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img._id)}
                    className="flex items-center justify-center text-xs text-red-600 hover:text-red-700 px-2 py-1.5 border border-red-200 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-lg font-bold text-gray-900">
                {editing === "new" ? "Add Photo" : "Edit Photo"}
              </h2>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-5 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                <input
                  type="text"
                  value={form.src}
                  onChange={(e) => setForm({ ...form, src: e.target.value })}
                  placeholder="/images/photo1.jpg or https://..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text * <span className="text-gray-400 font-normal">(required for accessibility & SEO)</span>
                </label>
                <input
                  type="text"
                  value={form.alt}
                  onChange={(e) => setForm({ ...form, alt: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                <input
                  type="text"
                  value={form.caption}
                  onChange={(e) => setForm({ ...form, caption: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
                >
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editing === "new" ? "Add" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
