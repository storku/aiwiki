import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { createUser, setSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { username, email, password, displayName } = await request.json();

  if (!username || !email || !password) {
    return NextResponse.json({ error: "Username, email, and password are required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return NextResponse.json({ error: "Username can only contain letters, numbers, hyphens, and underscores." }, { status: 400 });
  }

  if (username.length < 3 || username.length > 30) {
    return NextResponse.json({ error: "Username must be between 3 and 30 characters." }, { status: 400 });
  }

  // Check for existing username or email
  const existing = await sql`
    SELECT
      EXISTS(SELECT 1 FROM users WHERE username = ${username}) AS username_taken,
      EXISTS(SELECT 1 FROM users WHERE email = ${email}) AS email_taken
  `;

  if (existing[0].username_taken) {
    return NextResponse.json({ error: "Username is already taken." }, { status: 409 });
  }
  if (existing[0].email_taken) {
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  try {
    const user = await createUser(username, email, password, displayName || username);
    await setSessionCookie(user.id);
    return NextResponse.json({ success: true, user: { id: user.id, username: user.username, displayName: user.display_name } });
  } catch {
    return NextResponse.json({ error: "Failed to create account. Please try again." }, { status: 500 });
  }
}
