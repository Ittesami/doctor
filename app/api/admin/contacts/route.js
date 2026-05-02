import { NextResponse } from "next/server";
import { getAdminFromToken } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function GET() {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ contacts });
  } catch (err) {
    console.error("Contacts GET error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function PATCH(request) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    await connectDB();
    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!contact) {
      return NextResponse.json({ error: "Contact not found." }, { status: 404 });
    }
    return NextResponse.json({ contact });
  } catch (err) {
    console.error("Contacts PATCH error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
