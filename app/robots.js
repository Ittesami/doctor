export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    host: "https://www.drmdahsanhabib.com",
    sitemap: "https://www.drmdahsanhabib.com/sitemap.xml",
  };
}
