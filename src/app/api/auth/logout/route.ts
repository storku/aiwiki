import { NextResponse } from "next/server";
import { COOKIE_NAME, SESSION_COOKIE } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(COOKIE_NAME);
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
