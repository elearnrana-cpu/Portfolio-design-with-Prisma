import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0f172a",
          color: "#f8fafc",
          padding: "76px",
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf", marginBottom: 28 }}>Dhaka, Bangladesh</div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>Enamul Hasan Rana</div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#cbd5e1" }}>
          Web Developer | App Developer | Digital Marketer | AI Automation
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
