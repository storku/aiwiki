#!/usr/bin/env node

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

function splitSqlStatements(sqlText) {
  const statements = [];
  let current = "";
  let dollarQuote = null;
  let inSingleQuote = false;
  let inDoubleQuote = false;

  for (let i = 0; i < sqlText.length; i++) {
    const char = sqlText[i];
    const next = sqlText[i + 1];
    current += char;

    if (!inSingleQuote && !inDoubleQuote && char === "$") {
      const match = sqlText.slice(i).match(/^\$[A-Za-z0-9_]*\$/);
      if (match) {
        const tag = match[0];
        dollarQuote = dollarQuote === tag ? null : dollarQuote || tag;
        current += tag.slice(1);
        i += tag.length - 1;
        continue;
      }
    }

    if (dollarQuote) continue;

    if (char === "'" && !inDoubleQuote) {
      if (inSingleQuote && next === "'") {
        current += next;
        i++;
      } else {
        inSingleQuote = !inSingleQuote;
      }
      continue;
    }

    if (char === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
      continue;
    }

    if (char === ";" && !inSingleQuote && !inDoubleQuote) {
      const statement = current.trim();
      if (statement) statements.push(statement);
      current = "";
    }
  }

  const trailing = current.trim();
  if (trailing) statements.push(trailing);
  return statements;
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use: node --env-file=.env.local scripts/migrate.mjs");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const migrationsDir = path.join(process.cwd(), "migrations");
  const files = (await readdir(migrationsDir))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  await sql`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  const appliedRows = await sql`SELECT name FROM schema_migrations`;
  const applied = new Set(appliedRows.map((row) => row.name));

  for (const file of files) {
    if (applied.has(file)) {
      console.log(`skip ${file}`);
      continue;
    }

    const sqlText = await readFile(path.join(migrationsDir, file), "utf8");
    const statements = splitSqlStatements(sqlText);

    await sql.transaction((tx) => [
      ...statements.map((statement) => tx.query(statement)),
      tx`INSERT INTO schema_migrations (name) VALUES (${file})`,
    ]);

    console.log(`applied ${file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
