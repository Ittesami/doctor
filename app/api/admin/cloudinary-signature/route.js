import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAdminFromToken } from "@/lib/auth";

// Generates a signed Cloudinary upload signature so the admin's browser can
// upload directly to Cloudinary without ever seeing the API secret.
export async function POST(request) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      {
        error:
          "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.",
      },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const folder = body.folder || "doctor";
  const timestamp = Math.round(Date.now() / 1000);

  const paramsToSign = { folder, timestamp };
  const toSign = Object.keys(paramsToSign)
    .sort()
    .map((key) => `${key}=${paramsToSign[key]}`)
    .join("&");
  const signature = crypto
    .createHash("sha1")
    .update(toSign + apiSecret)
    .digest("hex");

  return NextResponse.json({ signature, timestamp, apiKey, cloudName, folder });
}
