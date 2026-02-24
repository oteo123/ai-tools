import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Tools Pro — 102 AI-Powered Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#e5e5e5",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          AI Tools Pro
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#818cf8",
            marginBottom: 40,
            fontWeight: 600,
          }}
        >
          102 AI-Powered Tools
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 20,
            color: "#737373",
          }}
        >
          <span>Writing</span>
          <span>·</span>
          <span>Marketing</span>
          <span>·</span>
          <span>SEO</span>
          <span>·</span>
          <span>Business</span>
          <span>·</span>
          <span>Developer</span>
          <span>·</span>
          <span>Creative</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#e5e5e5",
            background: "#6366f1",
            padding: "12px 32px",
            borderRadius: 12,
            fontWeight: 600,
          }}
        >
          Free to Try — No Signup Required
        </div>
      </div>
    ),
    { ...size }
  );
}
