import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bronte Trails Oakville by Caivan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          backgroundColor: "#2d5f6b",
          padding: 60,
        }}
      >
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#ffffff",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Bronte Trails Oakville
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#3e7f93",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Pre-Construction Freehold Townhomes by Caivan
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#ffffff",
            opacity: 0.8,
            marginTop: 32,
            textAlign: "center",
          }}
        >
          Register for VIP Access
        </div>
      </div>
    ),
    { ...size }
  );
}
