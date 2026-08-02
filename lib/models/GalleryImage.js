import mongoose from "mongoose";

const galleryImageSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      required: true,
      trim: true,
    },
    caption: {
      type: String,
      trim: true,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.GalleryImage ||
  mongoose.model("GalleryImage", galleryImageSchema);
