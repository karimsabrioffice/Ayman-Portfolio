import { ImageResponse } from "next/og";

export const alt = "Ayman Faried — Account Manager & Content Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 80% 20%, #1e1b4b 0%, #050508 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#94a3b8", textTransform: "uppercase" }}>
          Account Manager &amp; Content Creator
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1.05, marginTop: 20 }}>Ayman Faried</div>
        <div style={{ width: 160, height: 6, marginTop: 28, background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b)" }} />
        <div style={{ fontSize: 34, color: "#cbd5e1", marginTop: 36 }}>
          5+ years running social media campaigns · Saudi Arabia &amp; Egypt
        </div>
      </div>
    ),
    size,
  );
}
