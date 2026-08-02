// One-off migration: inserts the gallery photos/videos that used to be
// hardcoded in components/Gallery.js and components/VideoGallery.js into
// MongoDB. Run once with:
//   node scripts/seed-gallery.js
// (requires MONGODB_URI to be set)

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set.");
  process.exit(1);
}

const galleryImageSchema = new mongoose.Schema(
  { src: String, alt: String, caption: String, order: Number },
  { timestamps: true }
);
const galleryVideoSchema = new mongoose.Schema(
  { title: String, description: String, videoUrl: String, thumbnail: String, duration: String, order: Number },
  { timestamps: true }
);

const GalleryImage =
  mongoose.models.GalleryImage || mongoose.model("GalleryImage", galleryImageSchema);
const GalleryVideo =
  mongoose.models.GalleryVideo || mongoose.model("GalleryVideo", galleryVideoSchema);

const images = [
  {
    src: "/images/photo1.jpg",
    alt: "With Professor Thomas Deska atarien Hospital, Witten, Germany for training on laser proctology.",
    caption: "With Professor Thomas Deska atarien Hospital, Witten, Germany for training on laser proctology.",
  },
  { src: "/images/photo2.jpg", alt: "Operation Theatre", caption: "Operation Theatre" },
  {
    src: "/images/photo3.jpeg",
    alt: "With Professor Parvez Sheikh(India) for training of complex and recurrent fistula in ano",
    caption: "With Professor Parvez Sheikh(India) for training of complex and recurrent fistula in ano",
  },
  {
    src: "/images/photo4.jpeg",
    alt: "With colorectal surgeon Peter A Cataldon, professor of Vermont Medical university, USA and author of ASCRS Text book.",
    caption: "With colorectal surgeon Peter A Cataldon, professor of Vermont Medical university, USA",
  },
  {
    src: "/images/photo5.jpeg",
    alt: "Attending colorectal conference in India",
    caption: "Attending colorectal conference in India with faculty members",
  },
  {
    src: "/images/photo6.jpeg",
    alt: "Formalin therapy for radiation proctitis",
    caption: "Started formalin therapy at National Institute of cancer research in 2020",
  },
  { src: "/images/photo7.jpeg", alt: "With Prof Antonio Longo, Italy", caption: "With Prof Antonio Longo, Italy" },
  {
    src: "/images/photo8.jpeg",
    alt: "Lone star retractor for rectal cancer operation",
    caption: "Lone star retractor made in 2016 for rectal cancer operation",
  },
  {
    src: "/images/photo9.jpeg",
    alt: "With Professor Olivier Glehen for advanced cancer surgery training",
    caption: "With Professor Olivier Glehen (France) for training on advanced cancer surgery",
  },
  { src: "/images/photo10.jpeg", alt: "Gallery photo 10", caption: "" },
  { src: "/images/photo11.jpeg", alt: "Gallery photo 11", caption: "" },
  { src: "/images/photo12.jpeg", alt: "With Professor Thomas Deska", caption: "With Professor Thomas Deska" },
].map((img, i) => ({ ...img, order: i }));

const videos = [
  {
    title: "Dr Ahsan Habib Treatment procedure of piles",
    description: "Dr Ahsan Habib Treatment procedure of piles",
    thumbnail: "https://i3.ytimg.com/vi/5SbP2XgWerc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5SbP2XgWerc",
    duration: "4:31",
  },
  {
    title: "BSCRS 1st National Conference",
    description: "BSCRS 1st National Conference",
    thumbnail: "https://i3.ytimg.com/vi/u6HPjjhMqfk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=u6HPjjhMqfk",
    duration: "4:27",
  },
  {
    title: "Piles treatment - Colorectal polyps Dr. Md. Ahsan Habib",
    description: "Piles treatment - Colorectal polyps Dr. Md. Ahsan Habib",
    thumbnail: "https://i3.ytimg.com/vi/7VIKi-V8SsI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=7VIKi-V8SsI",
    duration: "42:09",
  },
  {
    title: "Laparoscopic Ventral Rectopexy by Professor Sheikh",
    description: "Laparoscopic Ventral Rectopexy by Professor Sheikh",
    thumbnail: "https://i3.ytimg.com/vi/fxQKA2AfwVk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=fxQKA2AfwVk",
    duration: "7:06",
  },
  {
    title: "লেজার পদ্ধতিতে পাইলস রোগের চিকিৎসা",
    description: "Laser treatment for piles disease",
    thumbnail: "https://i3.ytimg.com/vi/I9sN7FYJvR8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=I9sN7FYJvR8",
    duration: "21:55",
  },
  {
    title: "Laser Treatment In Anal Fissure",
    description: "Laser Treatment In Anal Fissure",
    thumbnail: "https://i3.ytimg.com/vi/1t8k_SKT078/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1t8k_SKT078",
    duration: "23:59",
  },
].map((v, i) => ({ ...v, order: i }));

async function seed() {
  await mongoose.connect(MONGODB_URI);

  for (const img of images) {
    const exists = await GalleryImage.findOne({ src: img.src });
    if (exists) {
      console.log(`Skipping image (exists): ${img.src}`);
      continue;
    }
    await GalleryImage.create(img);
    console.log(`Inserted image: ${img.src}`);
  }

  for (const video of videos) {
    const exists = await GalleryVideo.findOne({ videoUrl: video.videoUrl });
    if (exists) {
      console.log(`Skipping video (exists): ${video.title}`);
      continue;
    }
    await GalleryVideo.create(video);
    console.log(`Inserted video: ${video.title}`);
  }

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
