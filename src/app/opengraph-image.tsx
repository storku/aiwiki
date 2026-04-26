import { ImageResponse } from "next/og";

export const alt = "AI Wiki - The Encyclopedia of Artificial Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0f1e 0%, #1a1a3e 50%, #0a0f1e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              color: "white",
            }}
          >
            AI
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            AI Wiki
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          The Encyclopedia of Artificial Intelligence
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#64748b",
            marginTop: "16px",
          }}
        >
          2,000+ articles on AI concepts, models, tools, and applications
        </div>
      </div>
    ),
    { ...size }
  );
}
