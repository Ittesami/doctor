import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    // Patient contact info
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },

    // Patient preference
    preferredChamber: {
      type: String,
      enum: ["dhanmondi", "tangail", "any"],
      default: "any",
    },
    preferredDate: {
      type: Date,
      default: null,
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },

    // Workflow status
    // pending    → submitted, admin needs to call & confirm
    // confirmed  → admin called, date/time set
    // attended   → patient showed up
    // no_show    → patient didn't show up
    // cancelled  → appointment cancelled
    status: {
      type: String,
      enum: ["pending", "confirmed", "attended", "no_show", "cancelled"],
      default: "pending",
    },

    // Set by admin on confirmation
    confirmedDate: {
      type: Date,
      default: null,
    },
    confirmedTime: {
      type: String,
      default: null,
    },

    // Internal admin notes
    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
