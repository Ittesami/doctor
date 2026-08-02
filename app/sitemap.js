import { services } from "@/lib/services-data";
import connectDB from "@/lib/mongodb";
import Publication from "@/lib/models/Publication";

const SITE_URL = "https://www.drmdahsanhabib.com";

// Re-generate periodically so newly published publications appear in the
// sitemap without requiring a full redeploy.
export const revalidate = 60;

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/publications",
    "/gallery",
    "/appointment",
    "/book",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let publicationRoutes = [];
  try {
    await connectDB();
    const publications = await Publication.find().select("slug updatedAt");
    publicationRoutes = publications.map((pub) => ({
      url: `${SITE_URL}/publications/${pub.slug}`,
      lastModified: pub.updatedAt,
      changeFrequency: "yearly",
      priority: 0.5,
    }));
  } catch (err) {
    console.error("Sitemap: failed to load publications", err);
  }

  return [...staticRoutes, ...serviceRoutes, ...publicationRoutes];
}
