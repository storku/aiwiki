import { cookies } from "next/headers";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sql } from "./db";
import { getAuthSecret } from "./env";

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

// User auth (email/password)
const SESSION_COOKIE = "aiwiki_session";
const SALT_ROUNDS = 10;
const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const EDIT_ROLES = new Set(["user", "editor", "admin"]);
const ADMIN_ROLES = new Set(["editor", "admin"]);

export interface User {
  id: number;
  username: string;
  display_name: string;
  email: string;
  role: string;
  avatar_url: string | null;
}

function signPayload(payload: string): string | null {
  const secret = getAuthSecret();
  if (!secret) return null;
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
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
  const valid = await verifyPassword(password, user.password_hash as string);
  if (!valid) return null;
  await sql`UPDATE users SET last_active = now() WHERE id = ${user.id}`;
  return {
    id: user.id as number,
    username: user.username as string,
    display_name: user.display_name as string,
    email: user.email as string,
    role: user.role as string,
    avatar_url: (user.avatar_url as string) || null,
  };
}

export async function setSessionCookie(userId: number): Promise<void> {
  const timestamp = Date.now().toString();
  const nonce = crypto.randomBytes(16).toString("hex");
  const payload = `${userId}:${timestamp}:${nonce}`;
  const signature = signPayload(payload);
  if (!signature) {
    throw new Error("AUTH_SECRET or EDITOR_SECRET must be set before creating sessions.");
  }
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, `${payload}:${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function getSessionUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!session) return null;

  // Token format: userId:timestamp:nonce:signature (signature is last segment)
  const lastColon = session.lastIndexOf(":");
  if (lastColon === -1) return null;

  const payload = session.slice(0, lastColon);
  const signature = session.slice(lastColon + 1);

  // Verify HMAC signature
  const expectedSignature = signPayload(payload);
  if (!expectedSignature || signature.length !== expectedSignature.length) return null;

  try {
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }
  } catch {
    return null;
  }

  // Parse and validate token fields
  const parts = payload.split(":");
  if (parts.length < 3) return null;

  const userId = parseInt(parts[0], 10);
  if (isNaN(userId)) return null;

  const timestamp = parseInt(parts[1], 10);
  if (isNaN(timestamp) || Date.now() - timestamp > SESSION_MAX_AGE_MS) return null;

  const rows = await sql`
    SELECT id, username, display_name, email, role, avatar_url
    FROM users WHERE id = ${userId}
  `;
  if (rows.length === 0) return null;
  const r = rows[0];
  return {
    id: r.id as number,
    username: r.username as string,
    display_name: r.display_name as string,
    email: r.email as string,
    role: r.role as string,
    avatar_url: (r.avatar_url as string) || null,
  };
}

export async function hasLegacyEditorToken(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(EDITOR_COOKIE)?.value;
  return Boolean(token && validateEditorToken(token));
}

export async function canEditWiki(): Promise<boolean> {
  if (await hasLegacyEditorToken()) return true;
  const user = await getSessionUser();
  return Boolean(user && EDIT_ROLES.has(user.role));
}

export async function canManageAdmin(): Promise<boolean> {
  if (await hasLegacyEditorToken()) return true;
  const user = await getSessionUser();
  return Boolean(user && ADMIN_ROLES.has(user.role));
}

export async function canManageImages(): Promise<boolean> {
  return canEditWiki();
}

export async function isAuthenticated(): Promise<boolean> {
  if (await hasLegacyEditorToken()) return true;
  return Boolean(await getSessionUser());
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export { EDITOR_COOKIE as COOKIE_NAME, SESSION_COOKIE };
