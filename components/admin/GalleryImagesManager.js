"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Loader2,
  Image as ImageIcon,
  Eye,
  Plus,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import Button from "../ui/Button";
import ImageUploader from "./ImageUploader";

const EMPTY_FORM = { src: "", alt: "", caption: "" };

export default function GalleryImagesManager() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

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
      const url = isNew
        ? "/api/gallery/images"
        : `/api/gallery/images/${editing._id}`;
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
      const res = await fetch(`/api/gallery/images/${id}`, {
        method: "DELETE",
      });
      if (res.ok) setImages((prev) => prev.filter((i) => i._id !== id));
    } catch {
      console.error("Failed to delete image");
    }
  };

  useEffect(() => {
    if (editing || previewImage) {
      document.body.classList.add("modal-open");
      return () => document.body.classList.remove("modal-open");
    }
    document.body.classList.remove("modal-open");
    return undefined;
  }, [editing, previewImage]);

  const previewModal = previewImage && (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.22)]">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Image Preview
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-800">
              {previewImage.alt || "Preview"}
            </h2>
          </div>
          <button
            onClick={() => setPreviewImage(null)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
            aria-label="Close preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="block w-full h-auto object-contain"
            />
          </div>

          {previewImage.caption && (
            <p className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
              {previewImage.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const modal = editing && (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto overscroll-contain"
    >
      <div className="relative w-full max-w-xl max-h-[92vh] my-auto overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_30px_80px_rgba(15,118,110,0.18)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-sky-100 bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-600 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <ImageIcon className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-black">
                {editing === "new" ? "Add Photo" : "Edit Photo"}
              </h2>
              <p className="text-xs text-cyan-100">Media upload</p>
            </div>
          </div>
          <button
            onClick={closeForm}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
            aria-label="Close photo form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-120px)] overflow-y-auto p-5 sm:p-6">
          <form onSubmit={handleSave} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <div className="flex items-center gap-2 mb-2">
                <ImageUploader
                  folder="doctor/gallery"
                  onUploaded={(url) => setForm((f) => ({ ...f, src: url }))}
                />
                {form.src && (
                  <span className="text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded">
                    Image ready
                  </span>
                )}
              </div>
              <input
                type="text"
                value={form.src}
                onChange={(e) => setForm({ ...form, src: e.target.value })}
                placeholder="Upload above, or paste an image URL"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alt Text *{" "}
                <span className="text-gray-400 font-normal">
                  (required for accessibility & SEO)
                </span>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caption
              </label>
              <input
                type="text"
                value={form.caption}
                onChange={(e) => setForm({ ...form, caption: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="danger" onClick={closeForm}>
                Cancel
              </Button>
              <Button type="submit" loading={isSaving} variant="primary">
                {editing === "new" ? "Add" : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            {images.length} photo{images.length !== 1 ? "s" : ""}
          </p>
          <Button onClick={openCreate} variant="accent" size="md" icon={Plus}>
            Add Photo
          </Button>
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {images.map((img, index) => (
              <div
                key={img._id}
                className={`group relative rounded-[26px] border border-[#e8decf] bg-[#faf7f2] p-2.5 shadow-[0_16px_30px_rgba(59,44,29,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(59,44,29,0.08)] ${index % 2 === 0 ? "rotate-[-0.9deg]" : "rotate-[0.9deg]"}`}
              >
                <div className="rounded-[20px] border border-[#f0e6d8] bg-white p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <div className="relative w-full overflow-hidden rounded-[15px] bg-[#f0f2f5]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block w-full h-auto object-contain transition duration-200 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <p className="line-clamp-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#2b2f36]">
                    {img.alt}
                  </p>
                  {img.caption && (
                    <p className="line-clamp-2 text-[10px] leading-4 text-slate-500">
                      {img.caption}
                    </p>
                  )}
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <button
                    onClick={() => setPreviewImage(img)}
                    className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#1f2d3d] px-2 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#2b3d52]"
                  >
                    <Eye className="h-3 w-3" />
                    Preview
                  </button>
                  <button
                    onClick={() => openEdit(img)}
                    className="flex items-center justify-center rounded-xl border border-[#d8dfe6] bg-white p-1.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                    aria-label={`Edit ${img.alt}`}
                  >
                    <Pencil className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => handleDelete(img._id)}
                    className="flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100"
                    aria-label={`Delete ${img.alt}`}
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {typeof document !== "undefined" && previewModal
        ? createPortal(previewModal, document.body)
        : null}
      {typeof document !== "undefined" && modal
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}
