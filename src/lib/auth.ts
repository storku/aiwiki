import { cookies } from "next/headers";

const COOKIE_NAME = "aiwiki_editor_token";

export function validateEditorToken(token: string): boolean {
  const secret = process.env.EDITOR_SECRET;
  if (!secret || !token) return false;
  // Timing-safe comparison
  if (token.length !== secret.length) return false;
  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= token.charCodeAt(i) ^ secret.charCodeAt(i);
  }
  return result === 0;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return validateEditorToken(token);
}

export { COOKIE_NAME };
