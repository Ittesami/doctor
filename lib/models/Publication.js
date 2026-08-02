import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    journal: {
      type: String,
      trim: true,
      default: "",
    },
    authors: {
      type: String,
      trim: true,
      default: "",
    },
    excerpt: {
      type: String,
      trim: true,
      default: "",
    },
    content: {
      type: String,
      trim: true,
      default: "",
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    coverImage: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Publication ||
  mongoose.model("Publication", publicationSchema);
