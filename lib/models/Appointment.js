import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 120,
    },
    details: {
      type: String,
      trim: true,
      default: "",
    },
    paymentMethod: {
      type: String,
      enum: ["bank_transfer", "bkash"],
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    scheduledDate: {
      type: Date,
      default: null,
    },
    scheduledTime: {
      type: String,
      default: null,
    },
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
