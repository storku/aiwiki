"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface BlobImage {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
  contentType: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ImagesPage() {
  const [images, setImages] = useState<BlobImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<BlobImage | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchImages = useCallback(
    async (loadMore = false) => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams();
        params.set("limit", "100");
        if (loadMore && cursor) {
          params.set("cursor", cursor);
        }

        const res = await fetch(`/api/images?${params}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to load images");
        }

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

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadError(null);

    const results: BlobImage[] = [];

    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/images", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || `Failed to upload ${file.name}`);
        }

        results.push({
          url: data.url,
          pathname: data.pathname,
          size: data.size,
          uploadedAt: new Date().toISOString(),
          contentType: data.contentType,
        });
      } catch (err) {
        setUploadError(
          err instanceof Error ? err.message : `Failed to upload ${file.name}`
        );
      }
    }

    if (results.length > 0) {
      setImages((prev) => [...results, ...prev]);
    }

    setUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  async function copyMarkdown(image: BlobImage) {
    const name = image.pathname.split("/").pop() || "image";
    const md = `![${name}](${image.url})`;
    await navigator.clipboard.writeText(md);
    setCopied(image.url + "-md");
    setTimeout(() => setCopied(null), 2000);
  }

  async function handleDelete(image: BlobImage) {
    if (!confirm(`Delete ${image.pathname.split("/").pop()}?`)) return;

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
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete image");
    }
  }

  const filtered = search
    ? images.filter((img) =>
        img.pathname.toLowerCase().includes(search.toLowerCase())
      )
    : images;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Images</h1>
          <p className="text-sm text-muted mt-1">
            {images.length} image{images.length !== 1 ? "s" : ""} uploaded
          </p>
        </div>

        <div className="flex items-center gap-3">
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
              placeholder="Filter images..."
              className="pl-9 pr-4 py-1.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all w-48"
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {uploading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
            accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml"
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
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragOver
            ? "border-primary bg-primary/5"
            : "border-border hover:border-muted"
        }`}
      >
        <svg
          className="mx-auto text-muted mb-3"
          width="32"
          height="32"
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
          PNG, JPEG, GIF, WebP, SVG. Max 10MB.
        </p>
      </div>

      {uploadError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {uploadError}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Image grid */}
      {loading && images.length === 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-surface animate-pulse"
            />
          ))}
        </div>
      ) : filtered.length === 0 ? (
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
            {search ? "No images match your filter." : "No images uploaded yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((image) => (
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
                <p className="text-white text-xs truncate">
                  {image.pathname.split("/").pop()}
                </p>
                <p className="text-white/60 text-[10px]">
                  {formatBytes(image.size)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

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
                  {selected.pathname.split("/").pop()}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted mt-1">
                  <span>{formatBytes(selected.size)}</span>
                  <span>{selected.contentType}</span>
                  <span>{formatDate(selected.uploadedAt)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted uppercase tracking-wider">
                  Image URL
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
                    onClick={() => copyUrl(selected.url)}
                    className="px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-surface transition-colors shrink-0"
                  >
                    {copied === selected.url ? "Copied!" : "Copy URL"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyMarkdown(selected)}
                  className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  {copied === selected.url + "-md"
                    ? "Copied!"
                    : "Copy Markdown"}
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
                  className="ml-auto px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
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
