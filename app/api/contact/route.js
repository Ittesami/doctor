import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(request) {
  try {
    const { fullName, phone, email, message } = await request.json();

    if (!fullName?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      message: message?.trim() || "",
    });

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
