"use client";
import { useState, useEffect, useCallback } from "react";
import { Loader2, BookOpen, Plus, Pencil, Trash2, X } from "lucide-react";
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
  const [editing, setEditing] = useState(null); // publication object, or "new", or null
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

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {publications.length} publication{publications.length !== 1 ? "s" : ""}
        </p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          New Publication
        </button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      )}

      {/* Empty */}
      {!isLoading && publications.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No publications yet</p>
          <p className="text-gray-400 text-sm mt-1">Add your first publication to get started</p>
        </div>
      )}

      {/* List */}
      {!isLoading && publications.length > 0 && (
        <div className="space-y-3">
          {publications.map((pub) => (
            <div
              key={pub._id}
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{pub.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
                  {pub.journal && (
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{pub.journal}</span>
                  )}
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {formatDate(pub.publishedDate)}
                  </span>
                  <span className="text-gray-400">/publications/{pub.slug}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => openEdit(pub)}
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pub._id)}
                  className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 px-3 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-lg font-bold text-gray-900">
                {editing === "new" ? "New Publication" : "Edit Publication"}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Journal</label>
                  <input
                    type="text"
                    value={form.journal}
                    onChange={(e) => setForm({ ...form, journal: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
                  <input
                    type="date"
                    value={form.publishedDate}
                    onChange={(e) => setForm({ ...form, publishedDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Authors</label>
                <input
                  type="text"
                  value={form.authors}
                  onChange={(e) => setForm({ ...form, authors: e.target.value })}
                  placeholder="Comma-separated names"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                <div className="flex items-center gap-2 mb-2">
                  <ImageUploader
                    folder="doctor/publications"
                    onUploaded={(url) => setForm((f) => ({ ...f, coverImage: url }))}
                  />
                  {form.coverImage && (
                    <span className="text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded">
                      Image ready
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  value={form.coverImage}
                  onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                  placeholder="Upload above, or paste an image URL"
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
                  {editing === "new" ? "Create" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
