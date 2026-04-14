import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ExitMedia — Desarrollo Web, E-commerce y AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse 70% 60% at 30% 20%, rgba(255,122,46,0.25), transparent 60%), #0a0a0a",
          color: "#ededed",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#ededed",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              position: "relative",
            }}
          >
            e
            <div
              style={{
                position: "absolute",
                right: -4,
                bottom: -4,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#ff7a2e",
              }}
            />
          </div>
          <span style={{ letterSpacing: -0.5 }}>
            Exit<span style={{ color: "#ff7a2e" }}>Media</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 94,
            lineHeight: 1.02,
            letterSpacing: -3,
          }}
        >
          <span>Diseñamos, desarrollamos</span>
          <span>
            y lanzamos tu{" "}
            <span style={{ color: "#ff7a2e", fontStyle: "italic" }}>próximo</span>
          </span>
          <span>proyecto digital.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8a8a80",
          }}
        >
          <span>Sitios · Tiendas · Apps · AI</span>
          <span style={{ fontFamily: "monospace" }}>Buenos Aires · AR</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
