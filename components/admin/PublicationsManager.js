"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Loader2, BookOpen, Plus, Pencil, Trash2, X } from "lucide-react";
import Button from "../ui/Button";
import ImageUploader from "./ImageUploader";

const EMPTY_FORM = {
  title: "",
  journal: "",
  authors: "",
  excerpt: "",
  content: "",
  publishedDate: "",
  coverImage: "",
};

export default function PublicationsManager() {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchPublications = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/publications");
      const data = await res.json();
      if (res.ok) setPublications(data.publications);
    } catch {
      console.error("Failed to fetch publications");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPublications();
  }, [fetchPublications]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setError("");
    setEditing("new");
  };

  const openEdit = (pub) => {
    setForm({
      title: pub.title,
      journal: pub.journal || "",
      authors: pub.authors || "",
      excerpt: pub.excerpt || "",
      content: pub.content || "",
      publishedDate: pub.publishedDate ? pub.publishedDate.slice(0, 10) : "",
      coverImage: pub.coverImage || "",
    });
    setError("");
    setEditing(pub);
  };

  const closeForm = () => {
    setEditing(null);
    setError("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    setIsSaving(true);
    setError("");
    try {
      const isNew = editing === "new";
      const url = isNew ? "/api/publications" : `/api/publications/${editing._id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save publication.");
        return;
      }
      closeForm();
      fetchPublications();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this publication? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/publications/${id}`, { method: "DELETE" });
      if (res.ok) setPublications((prev) => prev.filter((p) => p._id !== id));
    } catch {
      console.error("Failed to delete publication");
    }
  };

  useEffect(() => {
    if (editing) {
      document.body.classList.add("modal-open");
      return () => document.body.classList.remove("modal-open");
    }
    document.body.classList.remove("modal-open");
    return undefined;
  }, [editing]);

  const modal = editing && (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/45 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto overscroll-contain"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] my-auto overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_35px_90px_rgba(15,118,110,0.18)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-sky-100 bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-600 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-black">
                {editing === "new" ? "New Publication" : "Edit Publication"}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-100">Content management</p>
            </div>
          </div>
          <button
            onClick={closeForm}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
            aria-label="Close publication form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-120px)] overflow-y-auto p-5 sm:p-6">
          <form onSubmit={handleSave} className="space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Journal</label>
                <input
                  type="text"
                  value={form.journal}
                  onChange={(e) => setForm({ ...form, journal: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Published Date</label>
                <input
                  type="date"
                  value={form.publishedDate}
                  onChange={(e) => setForm({ ...form, publishedDate: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Authors</label>
              <input
                type="text"
                value={form.authors}
                onChange={(e) => setForm({ ...form, authors: e.target.value })}
                placeholder="Comma-separated names"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                rows={2}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Full Content</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={8}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Cover Image</label>
              <div className="mb-2 flex items-center gap-2">
                <ImageUploader
                  folder="doctor/publications"
                  onUploaded={(url) => setForm((f) => ({ ...f, coverImage: url }))}
                />
                {form.coverImage && (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                    Image ready
                  </span>
                )}
              </div>
              <input
                type="text"
                value={form.coverImage}
                onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                placeholder="Upload above, or paste an image URL"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="danger" onClick={closeForm}>
                Cancel
              </Button>
              <Button type="submit" loading={isSaving} variant="primary">
                {editing === "new" ? "Create" : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-3 rounded-[22px] border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 px-4 py-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">Publications</p>
            <h3 className="mt-1 text-lg font-black text-slate-900">
              {publications.length} publication{publications.length !== 1 ? "s" : ""}
            </h3>
          </div>
          <Button onClick={openCreate} variant="secondary" size="md" icon={Plus} className="rounded-xl shadow-[0_12px_20px_rgba(14,165,233,0.18)]">
            New Publication
          </Button>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
          </div>
        )}

        {!isLoading && publications.length === 0 && (
          <div className="rounded-[24px] border border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-slate-300" />
            <p className="text-lg font-bold text-slate-600">No publications yet</p>
            <p className="mt-1 text-sm text-slate-400">Add your first publication to get started</p>
          </div>
        )}

        {!isLoading && publications.length > 0 && (
          <div className="space-y-3">
            {publications.map((pub) => (
              <div
                key={pub._id}
                className="flex flex-col gap-3 rounded-[20px] border border-slate-200 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.07)] md:flex-row md:items-center md:justify-between"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100 text-sky-700 md:flex">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-black text-slate-900">{pub.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
                      {pub.journal && (
                        <span className="rounded-full bg-sky-50 px-2 py-1 text-sky-700">{pub.journal}</span>
                      )}
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                        {formatDate(pub.publishedDate)}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">/publications/{pub.slug}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-auto">
                  <button
                    onClick={() => openEdit(pub)}
                    className="flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-sky-700 transition hover:bg-sky-100"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pub._id)}
                    className="flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
                    aria-label={`Delete ${pub.title}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {typeof document !== "undefined" && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
