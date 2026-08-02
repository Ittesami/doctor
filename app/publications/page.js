import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationsList from "@/components/PublicationsList";
import connectDB from "@/lib/mongodb";
import Publication from "@/lib/models/Publication";

export const metadata = {
  title: "Publications & Research | Prof. Dr. Md. Ahsan Habib",
  description:
    "Peer-reviewed research contributions to colorectal surgery by Prof. Dr. Md. Ahsan Habib, published in national and international medical journals.",
};

// Re-fetch periodically so new publications added via /admin show up
// without requiring a full redeploy.
export const revalidate = 60;

async function getPublications() {
  await connectDB();
  const publications = await Publication.find().sort({ publishedDate: -1 });
  return JSON.parse(JSON.stringify(publications));
}

export default async function PublicationsPage() {
  const publications = await getPublications();

  return (
    <div className="min-h-screen">
      <Navbar />
      <PublicationsList publications={publications} />
      <Footer />
    </div>
  );
}
