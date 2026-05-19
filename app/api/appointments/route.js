import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Appointment from "@/lib/models/Appointment";
import { getAdminFromToken } from "@/lib/auth";

const VALID_STATUSES = ["pending", "confirmed", "attended", "no_show", "cancelled"];

export async function GET(request) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const filter = {};
    if (status && VALID_STATUSES.includes(status)) {
      filter.status = status;
    }

    const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ appointments });
  } catch (err) {
    console.error("Appointments GET error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { fullName, phone, email, preferredChamber, preferredDate, message } = body;

    if (!fullName?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    const appointment = await Appointment.create({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      preferredChamber: preferredChamber || "any",
      preferredDate: preferredDate ? new Date(preferredDate) : null,
      message: message?.trim() || "",
    });

    return NextResponse.json(
      { success: true, id: appointment._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Appointment POST error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
