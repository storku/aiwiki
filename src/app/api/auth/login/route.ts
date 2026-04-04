import { NextRequest, NextResponse } from "next/server";
import { validateEditorToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { secret } = await request.json();

  if (!validateEditorToken(secret)) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
