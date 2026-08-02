export function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?/]+)/
  );
  return match ? match[1] : null;
}

export function youTubeThumbnail(url) {
  const id = extractYouTubeId(url);
  return id ? `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg` : "";
}
