import { ImageResponse } from "next/og";
import { getPageBySlug } from "@/lib/content";

export const runtime = "edge";
export const alt = "AI Wiki Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  const title = page?.title || slug.replace(/_/g, " ");
  const excerpt = page?.excerpt || "";
  const categories = page?.categories?.slice(0, 3) || [];
  const readingTime = page?.readingTime || 0;

  // Truncate title if too long
  const displayTitle =
    title.length > 60 ? title.slice(0, 57) + "..." : title;

  // Truncate excerpt
  const displayExcerpt =
    excerpt.length > 120 ? excerpt.slice(0, 117) + "..." : excerpt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0f1e 0%, #1a1a3e 50%, #0a0f1e 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: 800,
                color: "white",
              }}
            >
              AI
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              AI Wiki
            </div>
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            {displayTitle}
          </div>

          {displayExcerpt && (
            <div
              style={{
                fontSize: "22px",
                color: "#94a3b8",
                lineHeight: 1.5,
                maxWidth: "900px",
              }}
            >
              {displayExcerpt}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat}
              style={{
                fontSize: "16px",
                color: "#a5b4fc",
                background: "rgba(99, 102, 241, 0.15)",
                padding: "6px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              {cat}
            </div>
          ))}
          {readingTime > 0 && (
            <div
              style={{
                fontSize: "16px",
                color: "#64748b",
                marginLeft: "auto",
              }}
            >
              {readingTime} min read
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
