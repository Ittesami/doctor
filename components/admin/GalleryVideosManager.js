"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Loader2, Video as VideoIcon, Eye, Plus, Pencil, Trash2, X, Play } from "lucide-react";
import Button from "../ui/Button";

const EMPTY_FORM = { title: "", description: "", videoUrl: "", thumbnail: "", duration: "" };

export default function GalleryVideosManager() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [previewVideo, setPreviewVideo] = useState(null);

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

  const getVideoPreview = (url) => {
    if (!url) return null;

    const youtuRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/i;
    const match = url.match(youtuRegex);

    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

  useEffect(() => {
    if (editing || previewVideo) {
      document.body.classList.add("modal-open");
      return () => document.body.classList.remove("modal-open");
    }
    document.body.classList.remove("modal-open");
    return undefined;
  }, [editing, previewVideo]);

  const previewModal = previewVideo && (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.22)]">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Video Preview</p>
            <h2 className="mt-1 text-lg font-bold text-slate-800">{previewVideo.title}</h2>
          </div>
          <button
            onClick={() => setPreviewVideo(null)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
            aria-label="Close video preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            {(() => {
              const previewUrl = getVideoPreview(previewVideo.videoUrl);
              const isYoutube = previewUrl && previewUrl.includes("youtube.com/embed/");

              if (isYoutube) {
                return (
                  <iframe
                    src={previewUrl}
                    title={previewVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-[420px] w-full"
                  />
                );
              }

              if (previewUrl) {
                return (
                  <video
                    src={previewUrl}
                    controls
                    preload="metadata"
                    poster={previewVideo.thumbnail || ""}
                    className="h-[420px] w-full object-cover"
                  />
                );
              }

              return null;
            })()}
          </div>

          {previewVideo.description && (
            <p className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
              {previewVideo.description}
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
              <VideoIcon className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-black">
                {editing === "new" ? "Add Video" : "Edit Video"}
              </h2>
              <p className="text-xs text-cyan-100">Media upload</p>
            </div>
          </div>
          <button
            onClick={closeForm}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
            aria-label="Close video form"
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
            {videos.length} video{videos.length !== 1 ? "s" : ""}
          </p>
          <Button onClick={openCreate} variant="accent" size="md" icon={Plus}>
            Add Video
          </Button>
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video, index) => {
              const previewUrl = getVideoPreview(video.videoUrl);
              const isYoutube = previewUrl && previewUrl.includes("youtube.com/embed/");

              return (
                <div
                  key={video._id}
                  className={`group relative rounded-[26px] border border-[#e3ddff] bg-[#f8f6ff] p-2.5 shadow-[0_16px_30px_rgba(77,66,176,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(77,66,176,0.08)] ${index % 2 === 0 ? "rotate-[-0.8deg]" : "rotate-[0.8deg]"}`}
                >
                  <div className="rounded-[20px] border border-[#ebe7ff] bg-white p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <div className="relative aspect-video overflow-hidden rounded-[15px] bg-[#eff2f8]">
                      {isYoutube ? (
                        <iframe
                          src={previewUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      ) : previewUrl ? (
                        <video
                          src={previewUrl}
                          controls
                          preload="metadata"
                          poster={video.thumbnail || ""}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={video.thumbnail || "/images/placeholder-video.jpg"}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                      )}

                      <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-[#1d1f2a]/80 px-2 py-1 text-[8px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        <Play className="h-2.5 w-2.5 fill-white" />
                        Video
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2">
                    <p className="line-clamp-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#2b2d3a]">{video.title}</p>
                    {video.description && <p className="line-clamp-2 text-[10px] leading-4 text-slate-500">{video.description}</p>}
                  </div>

                  <div className="mt-3 flex items-center gap-1.5">
                    <button
                      onClick={() => setPreviewVideo(video)}
                      className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#4f46e5] px-2 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#4338ca]"
                    >
                      <Eye className="h-3 w-3" />
                      Preview
                    </button>
                    <button
                      onClick={() => openEdit(video)}
                      className="flex items-center justify-center rounded-xl border border-[#d8dfe6] bg-white p-1.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                      aria-label={`Edit ${video.title}`}
                    >
                      <Pencil className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100"
                      aria-label={`Delete ${video.title}`}
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {typeof document !== "undefined" && previewModal ? createPortal(previewModal, document.body) : null}
      {typeof document !== "undefined" && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
