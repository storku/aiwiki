import { NextRequest, NextResponse } from "next/server";
import { validateEditorToken, COOKIE_NAME, authenticateUser, setSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Legacy editor-secret login
  if (body.secret) {
    if (!validateEditorToken(body.secret)) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, body.secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  // Email/password login
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = await authenticateUser(email, password);
  if (!user) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  await setSessionCookie(user.id);
  return NextResponse.json({ success: true, user: { id: user.id, username: user.username, displayName: user.display_name } });
}
