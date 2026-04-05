import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { sql } from "./db";

// Editor token auth (existing system)
const EDITOR_COOKIE = "aiwiki_editor_token";

export function validateEditorToken(token: string): boolean {
  const secret = process.env.EDITOR_SECRET;
  if (!secret || !token) return false;
  if (token.length !== secret.length) return false;
  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= token.charCodeAt(i) ^ secret.charCodeAt(i);
  }
  return result === 0;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(EDITOR_COOKIE)?.value;
  if (!token) return false;
  return validateEditorToken(token);
}

// User auth (email/password)
const SESSION_COOKIE = "aiwiki_session";
const SALT_ROUNDS = 10;

export interface User {
  id: number;
  username: string;
  display_name: string;
  email: string;
  role: string;
  avatar_url: string | null;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createUser(
  username: string,
  email: string,
  password: string,
  displayName: string
): Promise<User> {
  const passwordHash = await hashPassword(password);
  const rows = await sql`
    INSERT INTO users (username, display_name, email, password_hash, role, is_bot)
    VALUES (${username}, ${displayName}, ${email}, ${passwordHash}, 'user', false)
    RETURNING id, username, display_name, email, role, avatar_url
  `;
  return rows[0] as User;
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const rows = await sql`
    SELECT id, username, display_name, email, role, avatar_url, password_hash
    FROM users WHERE email = ${email} AND password_hash IS NOT NULL
  `;
  if (rows.length === 0) return null;
  const user = rows[0];
  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) return null;
  await sql`UPDATE users SET last_active = now() WHERE id = ${user.id}`;
  return { id: user.id, username: user.username, display_name: user.display_name, email: user.email, role: user.role, avatar_url: user.avatar_url };
}

export async function setSessionCookie(userId: number): Promise<Response | void> {
  // Simple session token: base64(userId:timestamp:random)
  const token = Buffer.from(`${userId}:${Date.now()}:${Math.random().toString(36).slice(2)}`).toString("base64url");
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, `${userId}:${token}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function getSessionUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!session) return null;
  const userId = parseInt(session.split(":")[0], 10);
  if (isNaN(userId)) return null;
  const rows = await sql`
    SELECT id, username, display_name, email, role, avatar_url
    FROM users WHERE id = ${userId}
  `;
  if (rows.length === 0) return null;
  return rows[0] as User;
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export { EDITOR_COOKIE as COOKIE_NAME, SESSION_COOKIE };
