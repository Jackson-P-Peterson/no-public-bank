import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "NO CITY HALL BANK — You Pay the Tax. Vote No November 3, 2026.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "56px 64px",
          fontFamily: "Arial Black, Impact, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#d6001c",
          }}
        >
          SAN FRANCISCO · NOVEMBER 3, 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 210,
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
            }}
          >
            NO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginTop: 8,
            }}
          >
            CITY HALL BANK
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1,
              color: "#d6001c",
              marginTop: 14,
            }}
          >
            YOU PAY THE TAX
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#ffffff",
          }}
        >
          $310 MILLION · NO FUNDING PLAN · VOTE NO
        </div>
      </div>
    ),
    { ...size }
  );
}
