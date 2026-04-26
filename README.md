# AI Wiki

Next.js app for AI Wiki, backed by Neon PostgreSQL and Vercel Blob Storage.

## Requirements

- Node.js 20.9 or newer
- npm
- Neon PostgreSQL database
- Vercel Blob token for image uploads

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Fill in:

- `DATABASE_URL`: Neon PostgreSQL connection string.
- `AUTH_SECRET`: long random secret for signed user sessions.
- `EDITOR_SECRET`: legacy editor/admin secret.
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob read/write token.
- `REVALIDATE_SECRET`: on-demand revalidation secret.

Create or update database tables:

```bash
npm run db:migrate
```

Run locally:

```bash
npm run dev
```

## Useful Commands

```bash
npm run lint
npm run build
npm run db:migrate
```

## Notes

- `content/` contains imported/generated article source files.
- `tmp/` and `screenshots/` are generated working artifacts and are ignored.
- Admin deletion alerts depend on the `deletion_alerts` table from migrations.
- Search performance depends on the `pg_trgm` indexes created by migrations.
