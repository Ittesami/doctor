import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Appointment from "@/lib/models/Appointment";
import { getAdminFromToken } from "@/lib/auth";

export async function GET(request) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const filter = {};
  if (status && ["pending", "approved", "rejected"].includes(status)) {
    filter.status = status;
  }

  const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
  return NextResponse.json({ appointments });
}

export async function POST(request) {
  await connectDB();

  const body = await request.json();
  const { patientName, whatsappNumber, sex, age, details, paymentMethod, transactionId } = body;

  if (!patientName || !whatsappNumber || !sex || !age || !paymentMethod || !transactionId) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const appointment = await Appointment.create({
    patientName,
    whatsappNumber,
    sex,
    age: Number(age),
    details: details || "",
    paymentMethod,
    transactionId,
    status: "pending",
  });

  return NextResponse.json(
    { appointment, message: "Appointment submitted successfully" },
    { status: 201 }
  );
}
