import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Appointment from "@/lib/models/Appointment";
import { getAdminFromToken } from "@/lib/auth";

export async function PATCH(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { id } = await params;
  const body = await request.json();
  const { status, scheduledDate, scheduledTime, adminNotes } = body;

  if (status && !["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const updateData = {};
  if (status) updateData.status = status;
  if (scheduledDate) updateData.scheduledDate = scheduledDate;
  if (scheduledTime) updateData.scheduledTime = scheduledTime;
  if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

  const appointment = await Appointment.findByIdAndUpdate(id, updateData, { new: true });

  if (!appointment) {
    return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
  }

  return NextResponse.json({ appointment });
}
