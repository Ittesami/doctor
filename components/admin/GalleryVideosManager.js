"use client";
import { useState, useEffect, useCallback } from "react";
import { Loader2, Video as VideoIcon, Plus, Pencil, Trash2, X } from "lucide-react";

const EMPTY_FORM = { title: "", description: "", videoUrl: "", thumbnail: "", duration: "" };

export default function GalleryVideosManager() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/gallery/videos");
      const data = await res.json();
      if (res.ok) setVideos(data.videos);
    } catch {
      console.error("Failed to fetch gallery videos");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setError("");
    setEditing("new");
  };

  const openEdit = (video) => {
    setForm({
      title: video.title,
      description: video.description || "",
      videoUrl: video.videoUrl,
      thumbnail: video.thumbnail || "",
      duration: video.duration || "",
    });
    setError("");
    setEditing(video);
  };

  const closeForm = () => {
    setEditing(null);
    setError("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.videoUrl.trim()) {
      setError("Title and video URL are required.");
      return;
    }
    setIsSaving(true);
    setError("");
    try {
      const isNew = editing === "new";
      const url = isNew ? "/api/gallery/videos" : `/api/gallery/videos/${editing._id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save video.");
        return;
      }
      closeForm();
      fetchVideos();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this video? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/gallery/videos/${id}`, { method: "DELETE" });
      if (res.ok) setVideos((prev) => prev.filter((v) => v._id !== id));
    } catch {
      console.error("Failed to delete video");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {videos.length} video{videos.length !== 1 ? "s" : ""}
        </p>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Video
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      )}

      {!isLoading && videos.length === 0 && (
        <div className="text-center py-20">
          <VideoIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No videos yet</p>
        </div>
      )}

      {!isLoading && videos.length > 0 && (
        <div className="space-y-3">
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center gap-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-24 h-14 object-cover rounded flex-shrink-0 bg-gray-100"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate text-sm">{video.title}</h3>
                <p className="text-xs text-gray-500 truncate">{video.videoUrl}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => openEdit(video)}
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(video._id)}
                  className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 px-3 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
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
                {editing === "new" ? "Add Video" : "Edit Video"}
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL *</label>
                <input
                  type="text"
                  value={form.videoUrl}
                  onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    placeholder="e.g. 4:31"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thumbnail <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.thumbnail}
                    onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                    placeholder="auto-detected from URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={2}
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
