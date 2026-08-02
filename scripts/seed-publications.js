// One-off migration: inserts the publications that used to be hardcoded in
// app/publications/page.js into MongoDB. Run once with:
//   node scripts/seed-publications.js
// (requires MONGODB_URI to be set, e.g. via `node -r dotenv/config scripts/seed-publications.js`)

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set.");
  process.exit(1);
}

const publicationSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    journal: String,
    authors: String,
    excerpt: String,
    content: String,
    publishedDate: Date,
    coverImage: String,
  },
  { timestamps: true }
);

const Publication =
  mongoose.models.Publication || mongoose.model("Publication", publicationSchema);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const publications = [
  {
    title: "Feasibility, Safety and efficacy of enteral feeding within 24 hours",
    journal: "Journal of Medical Science",
    authors: "Islam MR, Sheikh SH, Khatun SA, Lima IJ, Ahsan Ullah AKM",
    publishedDate: new Date("2018-11-25"),
  },
  {
    title: "Prophylactic mesh reduces frequency of parastomal hernia in Carcinoma rectum patients",
    journal: "Saheed Tajuddin Ahmed Medical College Journal",
    excerpt: "A randomized controlled trial published in February, 2018",
    publishedDate: new Date("2018-02-01"),
  },
  {
    title: "Extraskeletal Ewings sarcoma involving perineum",
    journal: "Saheed Tajuddin Ahmed Medical College Journal",
    excerpt: "Published in February, 2018",
    publishedDate: new Date("2018-02-01"),
  },
  {
    title: "Outcome of laparoscopic versus open abdominal surgery",
    journal: "Journal of Surgical Sciences",
    authors: "Naznin Kn, Sheikh SH, Habib MA, Islam MR, Alam A, Salauddin GM, Rahman MR",
    publishedDate: new Date("2018-11-25"),
  },
  {
    title: "Peutz-Jeghers syndrome: A case report",
    journal: "Dhaka Medical College Journal",
    authors: "Islam MR, Hossain MS, Sheikh SH, Rahman MR, Lima IJ, Khatun SA, Kasem MA",
    publishedDate: new Date("2018-11-25"),
  },
  {
    title: "Surgical outcomes in colorectal procedures",
    journal: "Mymensingh Medical Journal",
    excerpt: "Research on advanced surgical techniques and patient outcomes",
    publishedDate: new Date("2018-11-25"),
  },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);

  for (const pub of publications) {
    const exists = await Publication.findOne({ title: pub.title });
    if (exists) {
      console.log(`Skipping (already exists): ${pub.title}`);
      continue;
    }
    const slug = slugify(pub.title);
    await Publication.create({ ...pub, slug });
    console.log(`Inserted: ${pub.title}`);
  }

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
