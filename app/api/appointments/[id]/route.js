import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Appointment from "@/lib/models/Appointment";
import { getAdminFromToken } from "@/lib/auth";

const VALID_STATUSES = ["pending", "confirmed", "attended", "no_show", "cancelled"];

export async function PATCH(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const { status, confirmedDate, confirmedTime, adminNotes } = body;

    if (status && !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    // Require date + time when confirming
    if (status === "confirmed" && (!confirmedDate || !confirmedTime)) {
      return NextResponse.json(
        { error: "Confirmed date and time are required to confirm an appointment." },
        { status: 400 }
      );
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (confirmedDate) updateData.confirmedDate = new Date(confirmedDate);
    if (confirmedTime) updateData.confirmedTime = confirmedTime;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    const appointment = await Appointment.findByIdAndUpdate(id, updateData, { new: true });

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found." }, { status: 404 });
    }

    return NextResponse.json({ appointment });
  } catch (err) {
    console.error("Appointment PATCH error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
