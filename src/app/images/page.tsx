"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Image from "next/image";

interface BlobImage {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
  contentType: string;
}

interface Stats {
  totalCount: number;
  totalSize: number;
  typeCounts: Record<string, number>;
  typeSizes: Record<string, number>;
}

type SortKey = "name" | "size" | "date" | "type";
type SortDir = "asc" | "desc";
type ViewMode = "grid" | "list";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function shortType(ct: string): string {
  return ct.replace("image/", "").replace("svg+xml", "SVG").toUpperCase();
}

function fileName(img: BlobImage): string {
  return img.pathname.split("/").pop() || img.pathname;
}

/** Derive the /images/... wiki path from a blob pathname */
function wikiPath(img: BlobImage): string {
  const p = img.pathname;
  // wiki/images/foo.png -> /images/foo.png
  if (p.startsWith("wiki/")) return "/" + p.slice(5);
  // images/foo.png -> /images/foo.png
  if (p.startsWith("images/")) return "/" + p;
  return "/" + p;
}

// ─── Stats Cards ────────────────────────────────────────────────────

function StatsSection({ stats }: { stats: Stats | null }) {
  if (!stats) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-20 rounded-xl bg-surface animate-pulse border border-border"
          />
        ))}
      </div>
    );
  }

  const typeEntries = Object.entries(stats.typeCounts).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="stat-card rounded-xl border border-border bg-surface p-4">
        <p className="text-xs font-medium text-muted uppercase tracking-wider">
          Total Images
        </p>
        <p className="text-2xl font-bold mt-1">
          {stats.totalCount.toLocaleString()}
        </p>
      </div>
      <div className="stat-card rounded-xl border border-border bg-surface p-4">
        <p className="text-xs font-medium text-muted uppercase tracking-wider">
          Storage Used
        </p>
        <p className="text-2xl font-bold mt-1">
          {formatBytes(stats.totalSize)}
        </p>
      </div>
      <div className="stat-card rounded-xl border border-border bg-surface p-4">
        <p className="text-xs font-medium text-muted uppercase tracking-wider">
          File Types
        </p>
        <p className="text-2xl font-bold mt-1">{typeEntries.length}</p>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {typeEntries.map(([ct, count]) => (
            <span
              key={ct}
              className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium"
            >
              {shortType(ct)} ({count})
            </span>
          ))}
        </div>
      </div>
      <div className="stat-card rounded-xl border border-border bg-surface p-4">
        <p className="text-xs font-medium text-muted uppercase tracking-wider">
          Avg Size
        </p>
        <p className="text-2xl font-bold mt-1">
          {stats.totalCount > 0
            ? formatBytes(Math.round(stats.totalSize / stats.totalCount))
            : "0 B"}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────

export default function ImagesPage() {
  const [images, setImages] = useState<BlobImage[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<BlobImage | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch stats
  useEffect(() => {
    fetch("/api/images?mode=stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  const fetchImages = useCallback(
    async (loadMore = false) => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        params.set("limit", "200");
        if (loadMore && cursor) {
          params.set("cursor", cursor);
        }

        const res = await fetch(`/api/images?${params}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to load images");

        if (loadMore) {
          setImages((prev) => [...prev, ...data.blobs]);
        } else {
          setImages(data.blobs);
        }
        setCursor(data.cursor);
        setHasMore(data.hasMore);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load images");
      } finally {
        setLoading(false);
      }
    },
    [cursor]
  );

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get unique types for filter dropdown
  const availableTypes = useMemo(() => {
    const types = new Set(images.map((img) => img.contentType));
    return Array.from(types).sort();
  }, [images]);

  // Filter, sort, and deduplicate
  const processed = useMemo(() => {
    let result = images;

    // Filter by search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((img) =>
        img.pathname.toLowerCase().includes(q)
      );
    }

    // Filter by type
    if (typeFilter !== "all") {
      result = result.filter((img) => img.contentType === typeFilter);
    }

    // Sort
    result = [...result].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "name":
          cmp = fileName(a).localeCompare(fileName(b));
          break;
        case "size":
          cmp = a.size - b.size;
          break;
        case "date":
          cmp =
            new Date(a.uploadedAt).getTime() -
            new Date(b.uploadedAt).getTime();
          break;
        case "type":
          cmp = a.contentType.localeCompare(b.contentType);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [images, search, typeFilter, sortKey, sortDir]);

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadError(null);

    const results: BlobImage[] = [];
    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/images", { method: "POST", body: formData });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || `Failed to upload ${file.name}`);
        results.push({
          url: data.url,
          pathname: data.pathname,
          size: data.size,
          uploadedAt: new Date().toISOString(),
          contentType: data.contentType,
        });
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : `Failed to upload ${file.name}`);
      }
    }

    if (results.length > 0) {
      setImages((prev) => [...results, ...prev]);
      // Refresh stats
      fetch("/api/images?mode=stats")
        .then((r) => r.json())
        .then(setStats)
        .catch(() => {});
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  }

  async function copyText(text: string, key: string) {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  async function handleDelete(image: BlobImage) {
    if (!confirm(`Delete ${fileName(image)}?`)) return;
    try {
      const res = await fetch("/api/images", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: image.url }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to delete");
      }
      setImages((prev) => prev.filter((img) => img.url !== image.url));
      if (selected?.url === image.url) setSelected(null);
      // Refresh stats
      fetch("/api/images?mode=stats")
        .then((r) => r.json())
        .then(setStats)
        .catch(() => {});
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete image");
    }
  }

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "date" ? "desc" : "asc");
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Image Library</h1>
        <p className="text-sm text-muted mt-1">
          Manage images for AI Wiki articles. All images are stored in Vercel
          Blob Storage and served via aiwiki.ai/images.
        </p>
      </div>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Controls bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search images..."
              className="pl-9 pr-4 py-1.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all w-48"
            />
          </div>

          {/* Type filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          >
            <option value="all">All types</option>
            {availableTypes.map((t) => (
              <option key={t} value={t}>
                {shortType(t)}
              </option>
            ))}
          </select>

          {/* Sort buttons */}
          <div className="flex items-center border border-border rounded-lg overflow-hidden text-sm">
            {(["name", "size", "date", "type"] as SortKey[]).map((key) => (
              <button
                key={key}
                onClick={() => toggleSort(key)}
                className={`px-2.5 py-1.5 transition-colors capitalize ${
                  sortKey === key
                    ? "bg-primary text-white"
                    : "hover:bg-surface"
                }`}
              >
                {key}
                {sortKey === key && (
                  <span className="ml-0.5 text-[10px]">
                    {sortDir === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 transition-colors ${
                viewMode === "grid" ? "bg-primary text-white" : "hover:bg-surface"
              }`}
              title="Grid view"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 transition-colors ${
                viewMode === "list" ? "bg-primary text-white" : "hover:bg-surface"
              }`}
              title="List view"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>

          {/* Upload button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {uploading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                Upload
              </>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/gif,image/webp"
            multiple
            onChange={(e) => handleUpload(e.target.files)}
            className="hidden"
          />
        </div>
      </div>

      {/* Upload drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
          dragOver
            ? "border-primary bg-primary/5"
            : "border-border hover:border-muted"
        }`}
      >
        <svg
          className="mx-auto text-muted mb-2"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-sm text-muted">
          Drag and drop images here, or{" "}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-primary hover:underline font-medium"
          >
            browse files
          </button>
        </p>
        <p className="text-xs text-muted/60 mt-1">
          PNG, JPEG, GIF, WebP. Max 10MB.
        </p>
      </div>

      {/* Errors */}
      {uploadError && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-sm text-red-700 dark:text-red-300">
          {uploadError}
        </div>
      )}
      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Results count */}
      {!loading && (
        <p className="text-xs text-muted">
          Showing {processed.length} image{processed.length !== 1 ? "s" : ""}
          {search || typeFilter !== "all" ? ` (filtered from ${images.length})` : ""}
        </p>
      )}

      {/* Image grid / list */}
      {loading && images.length === 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-surface animate-pulse border border-border"
            />
          ))}
        </div>
      ) : processed.length === 0 ? (
        <div className="text-center py-16">
          <svg
            className="mx-auto text-muted mb-4"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="text-muted text-sm">
            {search || typeFilter !== "all"
              ? "No images match your filters."
              : "No images uploaded yet."}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {processed.map((image) => (
            <div
              key={image.url}
              className="group relative aspect-square rounded-xl border border-border bg-surface overflow-hidden cursor-pointer hover:border-primary/40 transition-all hover:shadow-md"
              onClick={() => setSelected(image)}
            >
              {image.contentType === "image/svg+xml" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image.url}
                  alt={image.pathname}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <Image
                  src={image.url}
                  alt={image.pathname}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  unoptimized
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs truncate">{fileName(image)}</p>
                <p className="text-white/60 text-[10px]">
                  {formatBytes(image.size)} &middot; {shortType(image.contentType)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List view */
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left text-xs text-muted uppercase tracking-wider">
                <th className="px-4 py-2.5 w-12"></th>
                <th className="px-4 py-2.5">Name</th>
                <th className="px-4 py-2.5 hidden sm:table-cell">Type</th>
                <th className="px-4 py-2.5 hidden md:table-cell">Size</th>
                <th className="px-4 py-2.5 hidden lg:table-cell">Date</th>
                <th className="px-4 py-2.5 w-20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {processed.map((image) => (
                <tr
                  key={image.url}
                  className="hover:bg-surface/50 cursor-pointer transition-colors"
                  onClick={() => setSelected(image)}
                >
                  <td className="px-4 py-2">
                    <div className="w-8 h-8 rounded border border-border overflow-hidden bg-surface relative">
                      {image.contentType === "image/svg+xml" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={image.url}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Image
                          src={image.url}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="32px"
                          unoptimized
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <p className="truncate max-w-[200px] sm:max-w-[300px]">
                      {fileName(image)}
                    </p>
                  </td>
                  <td className="px-4 py-2 hidden sm:table-cell text-muted">
                    {shortType(image.contentType)}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell text-muted">
                    {formatBytes(image.size)}
                  </td>
                  <td className="px-4 py-2 hidden lg:table-cell text-muted">
                    {formatDate(image.uploadedAt)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyText(wikiPath(image), image.url + "-wp");
                      }}
                      className="text-xs text-primary hover:underline"
                    >
                      {copied === image.url + "-wp" ? "Copied!" : "Copy path"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={() => fetchImages(true)}
            disabled={loading}
            className="px-6 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}

      {/* Image detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-surface rounded-t-2xl overflow-hidden">
              {selected.contentType === "image/svg+xml" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.url}
                  alt={selected.pathname}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <Image
                  src={selected.url}
                  alt={selected.pathname}
                  fill
                  className="object-contain"
                  unoptimized
                />
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-lg truncate">
                  {fileName(selected)}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted mt-1 flex-wrap">
                  <span>{formatBytes(selected.size)}</span>
                  <span>{shortType(selected.contentType)}</span>
                  <span>{formatDate(selected.uploadedAt)}</span>
                </div>
              </div>

              {/* Wiki path */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted uppercase tracking-wider">
                  Wiki Image Path
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={wikiPath(selected)}
                    className="flex-1 px-3 py-2 text-xs font-mono bg-surface border border-border rounded-lg select-all"
                    onFocus={(e) => e.target.select()}
                  />
                  <button
                    onClick={() =>
                      copyText(wikiPath(selected), selected.url + "-wp")
                    }
                    className="px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-surface transition-colors shrink-0"
                  >
                    {copied === selected.url + "-wp" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Full blob URL */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted uppercase tracking-wider">
                  Direct URL
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={selected.url}
                    className="flex-1 px-3 py-2 text-xs font-mono bg-surface border border-border rounded-lg select-all"
                    onFocus={(e) => e.target.select()}
                  />
                  <button
                    onClick={() => copyText(selected.url, selected.url)}
                    className="px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-surface transition-colors shrink-0"
                  >
                    {copied === selected.url ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    const name = fileName(selected);
                    const md = `![${name}](${wikiPath(selected)})`;
                    copyText(md, selected.url + "-md");
                  }}
                  className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  {copied === selected.url + "-md"
                    ? "Copied!"
                    : "Copy Markdown"}
                </button>
                <button
                  onClick={() => {
                    const html = `<img src="${wikiPath(selected)}" alt="${fileName(selected)}" />`;
                    copyText(html, selected.url + "-html");
                  }}
                  className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  {copied === selected.url + "-html"
                    ? "Copied!"
                    : "Copy HTML"}
                </button>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  Open original
                </a>
                <button
                  onClick={() => handleDelete(selected)}
                  className="ml-auto px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
