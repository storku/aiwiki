export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required but was not set.`);
  }
  return value;
}

export function getAuthSecret(): string | null {
  return process.env.AUTH_SECRET || process.env.EDITOR_SECRET || null;
}
